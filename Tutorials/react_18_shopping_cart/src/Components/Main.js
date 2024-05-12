import Product from "./Product"; // Importing Product component

export default function Main(props) {
    // Destructuring props to get products, onAdd, onRemove, and cartItems
    const { products, onAdd, onRemove, cartItems } = props;

    return (
        // Main component markup
        <div className="block col-2">
            <h2>Products</h2>
            <div className="row">
                {/* Map through each product and render Product component */}
                {products.map((product) => {
                    return (
                        <Product
                            key={product.id} // Unique key for each product
                            product={product} // Pass the product details to Product component
                            onAdd={onAdd} // Pass onAdd function to Product component
                            onRemove={onRemove} // Pass onRemove function to Product component
                            item={cartItems.find((x) => x.id === product.id)} // Pass the item details from cartItems to Product component
                        >
                            {product}
                        </Product>
                    );
                })}
            </div>
        </div>
    );
}
