export default function Product(props) {
    // Destructuring props to get product, onAdd, onRemove, and item
    const { product, onAdd, onRemove, item } = props;

    return (
        // Product component markup
        <div className="card">
            {/* Product image */}
            <img className="small" src={product.image} alt={product.name}></img>
            {/* Product price */}
            <h3>R{product.price}</h3>
            <div>
                {/* If item exists in cart, show quantity and buttons to remove or add */}
                {item ? (
                    <div>
                        {/* Button to remove item */}
                        <button onClick={() => onRemove(item)} className="remove">
                            -
                        </button>
                        {/* Display item quantity */}
                        <span className="p-1">{item.qty}</span>
                        {/* Button to add item */}
                        <button onClick={() => onAdd(item)} className="add">
                            +
                        </button>
                    </div>
                ) : (
                    // If item does not exist in cart, show button to add to cart
                    <button onClick={() => onAdd(product)}>Add To Cart</button>
                )}
            </div>
        </div>
    );
}
