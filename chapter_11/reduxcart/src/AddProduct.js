import React, { Component } from "react";

class AddProduct extends Component {
    state = {
        // Initial state for product name and price
        productName: '',
        productPrice: 0
    }

    // Handler to update the product name in the state
    productNameChangedHandler = (event) => {
        this.setState({ productName: event.target.value });
    }

    // Handler to update the product price in the state
    productPriceChangedHandler = (event) => {
        this.setState({ productPrice: event.target.value });
    }

    render() {
        return (
            <div className="container">
                {/* Input field to enter product name */}
                <input
                    type="text"
                    placeholder="Product Name"
                    onChange={this.productNameChangedHandler}
                    value={this.state.productName}
                />
                {/* Input field to enter product price */}
                <input
                    type="number"
                    placeholder="Product Price"
                    onChange={this.productPriceChangedHandler}
                    value={this.state.productPrice}
                />
                {/* Button to add the product with entered name and price */}
                <button className="buttons"
                    onClick={() => {
                        // Calling the addProduct function with product name and price as arguments
                        this.props.addProduct(this.state.productName, this.state.productPrice);
                    }}>Add Product</button>
            </div>
        );
    }
};

export default AddProduct;
