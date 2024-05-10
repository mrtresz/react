// Importing the connect function from react-redux to connect the React component with the Redux store
import { connect } from "react-redux";
// Importing the Cart component
import Cart from "./Cart";

// mapStateToProps function maps the state from the Redux store to props of the Cart component
function mapStateToProps(state) {
    return {
        // Mapping totalCost from the state to totalCost prop
        totalCost: state.totalCost,
        // Mapping productCart from the state to productCart prop
        productCart: state.productCart
    }
}

// mapDispatchToProps function maps dispatch actions to props of the Cart component
function mapDispatchToProps(dispatch) {
    return {
        // Dispatches an action to add a product to the cart
        onAddProduct: (productName, productPrice) => dispatch({
            type: "addProduct",
            productData: {
                productName: productName,
                productPrice: productPrice
            }
        }),
        // Dispatches an action to delete a product from the cart
        onDeleteProduct: (productData) => dispatch({
            type: "deleteProduct",
            productData: productData
        })
    }
}

// Connects the Cart component with the Redux store, mapping state and dispatch actions to props
var connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);

export default connectedComponent;
