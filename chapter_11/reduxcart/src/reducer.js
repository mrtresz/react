// Reducer function to manage the shopping cart state
function cartReducer(state, action) {
    // If the state is undefined, initialize it with default values
    if (state === undefined) {
        return {
            totalCost: 0,           // Total cost of products in the cart
            productCart: []        // Array to hold products in the cart
        };
    }

    // Switch statement to handle different actions
    switch (action.type) {
        // Action to add a product to the cart
        case "addProduct":
            return {
                ...state,
                // Increment total cost by the price of the added product
                totalCost: state.totalCost + parseInt(action.productData.productPrice),
                // Add the product to the productCart array
                productCart: state.productCart.concat({
                    productName: action.productData.productName,
                    productPrice: action.productData.productPrice
                })
            }
        // Action to delete a product from the cart
        case "deleteProduct":
            // Filter out the product to be deleted from the productCart array
            const updatedArray = state.productCart.filter(product =>
                product.productName !== action.productData.productName);
            return {
                ...state,
                // Decrement total cost by the price of the deleted product
                totalCost: state.totalCost - parseInt(action.productData.productPrice),
                // Update the productCart array with the filtered array
                productCart: updatedArray
            }
        // Default case returns the current state
        default:
            return state;
    }
}

export default cartReducer;
