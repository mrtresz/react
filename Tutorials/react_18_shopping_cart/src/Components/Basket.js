export default function Basket(props) {
    // Destructuring props
    const { cartItems, onAdd, onRemove } = props;

    // Calculating prices
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 200 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        // Basket component markup
        <aside className=" block col-1">
            <h2>Cart Items</h2>
            <div>
                {/* Display message if cart is empty */}
                {cartItems.length === 0 && <div>Cart is Empty</div>}
                {/* Display cart items */}
                {cartItems.map((item) => (
                    <div key={item.id} className="row">
                        <div className="col-1">{item.pName}</div>
                        <div className="col-1">
                            {/* Button to remove item */}
                            <button onClick={() => onRemove(item)} className="remove">
                                -
                            </button>
                            {/* Button to add item */}
                            <button onClick={() => onAdd(item)} className="add">
                                +
                            </button>
                        </div>
                        <div className="col-1 text-right">
                            {/* Display item quantity and price */}
                            {item.qty} x R{item.price.toFixed(2)}
                        </div>
                    </div>
                ))}
                {/* Display prices */}
                {cartItems.length !== 0 && (
                    <>
                        <hr />
                        <div className="row">
                            <div className="col-2">Items Price</div>
                            <div className="col-1 text-right">R{itemsPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-2">Tax Price</div>
                            <div className="col-1">R{taxPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-2">Shipping Price</div>
                            <div className="col-1 text-right">R{shippingPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <strong>Total Price</strong>
                            </div>
                            <div className="col-1 text-right">
                                {/* Display total price */}
                                <strong>R{totalPrice.toFixed(2)}</strong>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            {/* Button to initiate checkout */}
                            <button onClick={() => alert("Implement Checkout!")}>
                                Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </aside>
    );
}
