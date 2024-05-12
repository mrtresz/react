import Header from "./Components/Header"; // Importing Header component
import Main from "./Components/Main"; // Importing Main component
import Basket from "./Components/Basket"; // Importing Basket component
import data from "./data"; // Importing data file which contains product information
import { useEffect, useState, useTransition, useDeferredValue } from 'react'; // Importing necessary hooks from React

function App() {
  const [cartItems, setCartItems] = useState([]); // State to manage cart items

  // Function to add a product to the cart
  function onAdd(product) {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      // If the product already exists in the cart, update its quantity
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      )
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    } else {
      // If the product is not in the cart, add it with quantity 1
      const newCartItems = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }
  }

  // Function to remove a product from the cart
  function onRemove(product) {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      // If the quantity of the product is 1, remove it from the cart
      const newCartItems = cartItems.filter((x) => x.id !== product.id);
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    } else {
      // If the quantity of the product is more than 1, decrease its quantity by 1
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      );
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }
  }

  const { products } = data; // Destructuring products from data

  const [isPending, startTransition] = useTransition(); // Using useTransition hook to start a pending transition

  useEffect(() => {
    startTransition(() => {
      // Load cart items from localStorage when the component mounts
      setCartItems(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []);
    });
  }, []);

  const cartItemsCount = useDeferredValue(cartItems.length); // Using useDeferredValue hook to defer the value of cartItems.length

  return isPending ? (<div>Loading...</div>) // If the transition is pending, display "Loading..."
    : (
      // Otherwise, render the application
      <div>
        <Header countCartItems={cartItemsCount} /> {/* Header component with count of cart items */}
        <div className="row">
          <Main cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} products={products} /> {/* Main component to display products */}
          <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} /> {/* Basket component to display cart */}
        </div>
      </div>
    );
}

export default App;
