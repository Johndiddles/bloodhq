import React from 'react';
import { Component } from 'react';
import {Link, Redirect } from 'react-router-dom'
import axios from 'axios';

import Flutterwave from '../flutterwave/flutterwave.component'


import { fetchData } from '../../pages/checkout/api';

import bloodImage from '../../assets/pints.jpg';

import './checkout.styles.css';

const resource = fetchData();

class CheckoutDetails extends Component {
    constructor(){
        super();
        this.state = {
            cart : [],
        }

    }
    componentDidMount(){
        const token = localStorage.getItem('userToken')
        axios.get('https://bloodhq-be.herokuapp.com/api/v1/cart', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }).then(res => {
            console.log(res.data)
            this.setState({cart: res.data})
        }).catch(err => console.log(err))
    }

    handleCheckout =(e) => {
        e.preventDefault();

        const token = localStorage.getItem('userToken');

        fetch('https://bloodhq-be.herokuapp.com/api/v1/finalize/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: {}
        })
        .then(response => response.json())
        .then(data => console.log(data))

        alert('payment Concluded!')
    }

    render () {
        const cart = this.state.cart
        const details = resource.deliveryDetails.read();
        console.log(details)
    return (
        <div className="delivery-details-wrapper">
            <div className="details-left">
                <div className="address-wrapper">
                    <div className="col-12 d-flex address-header-wrapper">
                        <i className="check-address bi bi-check bg-success text-white "></i>
                        <h5 className="address-header">1. Delivery Address</h5>
                    </div>
                    <div className="user-address">
                        <p className="user-name text-dark">{details.data.user.fullname}</p> 
                        <p>Address: {details.data.user.address} </p>
                        <p>Phone: {details.data.user.phone}</p>

                    </div>
                </div>
                <div className="address-wrapper">
                    <div className="col-12 d-flex address-header-wrapper">
                        <i className="check-address bi bi-check bg-success text-white "></i>
                        <h5 className="address-header">2. Order Details</h5>
                    </div>
                    <div className="user-address">
                        <p className="user-name text-dark">Order Number: {details.data.order_number}</p> 
                        <p>Description: {details.data.order_description} </p>
                        <p >TOTAL: <span className="text-danger">N{details.data.total}</span></p>
                    </div>
                </div>

                <Flutterwave />

                {/* <Link className="checkout-btn mt-3" onClick={this.pay} to="/payment">checkout</Link> */}
                    
            </div>
            <div className="order-preview">
                <div className="address-header-wrapper">
                    <h5 className="address-header">Your Order ({`${cart.length} item(s)`})</h5>
                </div>
                <div className="cartItems-map">
                    {
                        cart.map(cartItems => (
                            <div className="cartItems">
                                <img src={bloodImage} alt="" />
                                <div className="">
                                    <p className="item">{cartItems.blood.blood_type}</p>
                                    <p>NGN{cartItems.price}</p>
                                    <p>Qty: {cartItems.quantity}</p>
                                </div>
                                
                            </div>
                        ))
                    }
                </div>
                
            </div>
        </div>
    )
    }
    
}

export default CheckoutDetails