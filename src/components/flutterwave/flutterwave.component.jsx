import React from 'react';
import {Redirect, BrowserRouter } from 'react-router-dom';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { Component } from 'react';
import axios from 'axios';


class Flutterwave extends Component {
    constructor(){
        super();

        this.state = {
            paymentData: [],
            email: '',
            phone: '',
            name: '',
            redirect: false
        }

    }

    componentDidMount(){
        const token = localStorage.getItem('userToken')
        axios.get('https://bloodhq-be.herokuapp.com/api/v1/payment', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }).then(res => {
            this.setState({
                paymentData: res.data.data, 
                email: res.data.data.user.email,
                phone: res.data.data.user.phone,
                name: res.data.data.user.name
            })
        }).catch(err => console.log(err))
    }
    

  render(){
      const data = this.state.paymentData
      const email = this.state.email
      const phone = this.state.phone
      const name = this.state.name
      console.log(data)
    const config = {
        public_key: 'FLWPUBK_TEST-db5bc2dc21efad5023ae7b13aa04cd2e-X',
        tx_ref: Date.now(),
        amount: data.total,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: email,
          phonenumber: phone,
          name: name,
        },
        customizations: {
          title: 'BloodHQ',
          description: data.order_description,
          logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
      };
    
       const fwConfig = {
        ...config,
        text: 'Pay now',
        callback: (response) => {
           console.log(response);
            if(response.status == "successful"){
                this.setState({redirect: true})
                const token = localStorage.getItem('userToken')
                fetch('https://bloodhq-be.herokuapp.com/api/v1/cart', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                }).then(response => response.json())
                .then(data => console.log(data))

                alert("Payment was " + response.status)

                
                return <Redirect to="/bloods" />
            }
          closePaymentModal() // this will close the modal programmatically
        },
        onClose: () => {},
      };

      if (this.state.redirect){

          return <BrowserRouter forceRefresh={true}>
                    <Redirect to="/bloods" />
                </BrowserRouter>
      }
    return (
        
        <div className="App">
          <FlutterWaveButton className="checkout-btn" {...fwConfig} />
        </div>
      );
  }
  
}



export default Flutterwave;