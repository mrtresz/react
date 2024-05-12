export default function Header(props) {
    // Destructuring props to get count of cart items
    const { countCartItems } = props;

    return (
        // Header component markup
        <div className="row center block">
            <div>
                {/* Logo with a link to home */}
                <a href="#/">
                    <h2>
                        Simple Shopping Cart
                    </h2>
                </a>
            </div>
            <div>
                {/* Navigation links */}
                <a href="#/cart">
                    {/* Cart link with badge showing count of items in cart */}
                    Cart {countCartItems ? <button className="badge">{countCartItems}</button> : ""}
                </a>
                <a href="#/sign-in">Sign In</a>
            </div>
        </div>
    );
}
