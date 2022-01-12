import React, {Suspense} from 'react';
import { Component } from 'react';
import {Link } from 'react-router-dom'
import axios from 'axios';

import bloodImage from '../../assets/pints.jpg';

import {Table } from 'react-bootstrap'

import './cart.styles.css';



class Cart extends Component {
    constructor(){
        super();

        this.state = {
            cartItems: [],
            totalAmount: 0
        }
    }
    componentDidMount(){
        const token = localStorage.getItem('userToken');

        fetch('https://bloodhq-be.herokuapp.com/api/v1/cart', {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }).then(response => response.json())
        .then(data => this.setState({
            cartItems: data,
        }))

        axios.get('https://bloodhq-be.herokuapp.com/api/v1/payment', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
    .then(res => this.setState({totalAmount: res.data.data.total}))
    .catch(err => console.log(err))


    }

    

    render (){
        const cartItems = this.state.cartItems;

        console.log(this.state.amounts)
;

        return (
            <div className="cart-page-wrapper">

                <div>
                    <h3 className="cart-head">cart</h3>
                </div>
                <div className="cart-section-wrapper">
                    <div className="carts">

                    <Table stripped bordered hover className="inventory-table">
                        <thead className="table_head carts-table-head">
                            <tr>
                            <th>Item</th>
                            <th>Details</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Total</th>
                            <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            cartItems.map(items => (
                                <tr className="table-rows" key={items.blood_id}>
                                    <td>
                                        <i className="bi bi-droplet text-danger blood-icon"></i>
                                        {/* <img className="cart-thumbnail" src={bloodImage} alt="" /> */}
                                        </td>
                              <td className="table_data">
                                  <div className="cart-table-details">
                                      
                                  <p className="cart-table-blood-type">{items.blood.blood_type}</p>
                                  <br></br>

                                    <div className="vendor-details">


                                    </div>
                                      <p>Vendor</p>
                                      <p className="vendor">Name: {items.blood.user.fullname}</p>
                                      <p className="vendor">Email: {items.blood.user.email}</p>
                                      <br></br>
                                  </div>
                                  
                                  
                                  </td>
                              <td className="table_data" id="blood_type">{items.quantity}</td>
                              <td className="table_data">NGN{items.price}</td>
                              <td className="table_data">NGN{items.total}</td>
                              <td className="action_column">
                                  <div className="actions-wrapper">
                                    <button className="cart-item-delete-btn" onClick={() => {
                                        const token = localStorage.getItem('userToken');
                                        const id = items.blood_id;

                                        fetch('https://bloodhq-be.herokuapp.com/api/v1/cart/'+`${id}`, {
                                            method: 'DELETE',
                                            headers: {
                                                'Content-Type': 'application/json',
                                                'Authorization': 'Bearer ' + token
                                            }
                                        }).then(response => response.json())
                                        .then(data => console.log(data))
                                        .catch(error => console.log(error))

                                    }}><i className="bi bi-trash"></i></button>                               
                                  </div>
                              </td>
                              
                          </tr>
                                // <div className="cart-list" key={items.blood_id}>
                                //     <div className="cart-list-left"> 
                                //         <p>{items.quantity}</p>
                                //         <p>{items.blood.blood_type}</p>
                                //         <p>@ NGN{items.price}</p>
                                //         <p className="cart-amount">Total: NGN{items.total}</p>
                                //     </div>
                                //     <button className="cart-item-delete-btn"><i className="bi bi-trash"></i></button>
                                // </div>
                            ))
                        }


                    
                </tbody>
                </Table>
                        
                    </div>
                    <div className="checkout-section">
                            <Suspense fallback={<p>Fetching total</p>}>
                                <h4 className="checkout-amount"> 
                                    Total: <span>NGN{this.state.totalAmount}</span>
                                </h4>
                            </Suspense>
                            
                        
                        
                        <Link to="/checkout" className="checkout-btn">checkout</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;