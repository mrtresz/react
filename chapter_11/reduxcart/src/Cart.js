import React, { Component } from "react";
import AddProduct from './AddProduct';  // Importing the AddProduct component
import { Table } from 'reactstrap';     // Importing the Table component from reactstrap

class Cart extends Component {
    render() {
        return (
            <div className="container">
                {/* Rendering the AddProduct component and passing onAddProduct function as prop */}
                <AddProduct addProduct={this.props.onAddProduct} />
                {/* Rendering a table to display the cart items */}
                <Table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Mapping through productCart array to render each product */}
                        {this.props.productCart.map(productData => (
                            <tr key={productData.productName}>
                                <td>{productData.productName}</td>
                                <td>{productData.productPrice}</td>
                                {/* Clicking on 'Remove' triggers onDeleteProduct function */}
                                <td onClick={() =>
                                    this.props.onDeleteProduct(productData)}>Remove</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                {/* Displaying the total cost */}
                <span>Total Amount: {this.props.totalCost}</span>
            </div>
        );
    }
};

export default Cart;
