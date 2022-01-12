import React from 'react';

import {Modal, Button, } from 'react-bootstrap';
import pints from '../../assets/pints.jpg';
import Header from '../../components/header/header.components'

import './blood-preview.styles.css';

function BloodPreview(props) {
  let [Total, setTotal] = React.useState()
    
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        key={props.key}
        className="blood-preview-modal"
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.details.fullname}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="blood-preview-body">
          <div className="preview-inner">
              <img src={pints} alt="" className="preview-inner-img" />
              <div className="preview-inner-details">
                  <h4>Blood Type: {props.details.blood_type}</h4>
                  <p>Price: NGN{props.details.blood_price}</p>
                  <br></br>
                  <p>Available Stock: {props.details.available_stock}</p>
                  <p>Contact Email: {props.details.email}</p>
                  <p>Contact Phone: {props.details.phone}</p>
                  <label className="blood-preview-label"> Quantity: <input className="blood-preview-input" onChange={(e) => {
                    var quantity = e.target.value
                    setTotal = (parseInt(props.details.blood_price) * quantity);
                    document.getElementById('total').value = (parseInt(props.details.blood_price) * quantity);
                  }} type="number" placeholder="1" id="order-quantity" />
                  </label>

                  <label> Total Amount: <input  type="number" id="total" className="blood-preview-input" readOnly />
                  </label>

                <button className="preview-btn" onClick={() => {
                  const quantity = document.getElementById('order-quantity').value;
                  const blood_id = props.details.id;
                  const price = props.details.blood_price;
                  const total = document.getElementById('total').value
                  const order_id = props.details.blood_type + props.details.id

                  const orderDetails = { quantity, price, total, order_id, blood_id};
                  console.log(blood_id)
                  const token = localStorage.getItem('userToken')
                  fetch('https://bloodhq-be.herokuapp.com/api/v1/addCart', {
                    method: 'POST',
                    headers: {
                      'Accept' : 'application/json',
                      'Content-Type': 'application/json',
                      'Authorization': 'Bearer ' + token
                    },
                    body: JSON.stringify(orderDetails)
                  }).then(response => response.json())
                  .then(data => {
                    alert(data.message)
                    console.log(data.message)
                    window.location.reload(false);
                  })
                }}>Add to cart</button>
              </div>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="preview-btn " onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  

  export default BloodPreview;