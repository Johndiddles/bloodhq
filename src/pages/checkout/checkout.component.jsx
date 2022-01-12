import React, {Suspense} from 'react'
import { Component } from 'react';

import { fetchData } from './api'
import CheckoutDetails from '../../components/checkout/checkout.component'

import './checkout.styles.css';

const resource = fetchData();

const Checkout = () => {
    return (
        <div className="checkout-page ">
            <p className="checkout-page-header text-secondary">CHECKOUT</p>
            <Suspense fallback={<h5>Loading Delivery Details...</h5>}>
                <CheckoutDetails />
            </Suspense>
        </div>
    )
    
}

export default Checkout