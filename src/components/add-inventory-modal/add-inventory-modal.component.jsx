import React from 'react';

import {Modal } from 'react-bootstrap'

import './add-inventory-modal.styles.css';

function InventoryModal (props){
  
  const [blood_type, setBlood_type] = React.useState('');
  const [blood_price, setBlood_price] = React.useState('');
  const [available_stock, setAvailable_stock] = React.useState('');
  const token = localStorage.getItem('userToken');

  const bloodDetails = {blood_type, blood_price, available_stock}

  const handleNewStock = (e) => {
    e.preventDefault();

    fetch('https://bloodhq-be.herokuapp.com/api/v1/bloods/addblood', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(bloodDetails)
    }).then(response => response.json())
    .then(data => {
      alert(data.message)
      window.location.reload(false)
    })

    

    console.log(JSON.stringify(bloodDetails))
  }
    return (
        <div className="add-inventory-wrapper">
            <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        key={props.key} 
        className="add-inventory-modal"
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter" className="modal-header-text">
              Add Inventory
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <div className="input-box">
                        <label htmlFor="blood_type" className="text-danger">Blood type</label>
                        <select 
                        className="box inventory-inputs blood-type"
                    name="blood_type"
                    type='text' 
                    placeholder= 'blood type ' 
                    onChange={(e)=> setBlood_type(e.target.value)}
                >
                    <option value='' >Select Blood Type</option>
                    <option value="a negative">A -</option>
                    <option value="b negative">B -</option>
                    <option value="ab negative">AB -</option>
                    <option value="o negative">O -</option>
                    <option value="a positive">A +</option>
                    <option value="b positive">B +</option>
                    <option value="ab positive">AB +</option>
                    <option value="o positive">O +</option>
                </select>
                        {/* <input type="text" value={blood_type} onChange={(e)=> setBlood_type(e.target.value)} name="blood_type" placeholder="blood type" className="box" id="blood_type" /> */}
                    </div>    
                    <div className="input-box">
                        <label htmlFor="blood_price">Blood price</label>
                        <input type="number" value={blood_price} onChange={(e)=> setBlood_price(e.target.value)} name="blood_price" placeholder="blood price" className="box inventory-inputs" id="blood_price" />
                    </div>  
                    <div className="input-box">
                        <label htmlFor="available_stock">Available Stock</label>
                        <input type="number" value={available_stock} onChange={(e)=> setAvailable_stock(e.target.value)} name="available_stock" placeholder="available stock" className="box inventory-inputs" id="available_stock" />

                    </div>  
                    <button className="addButton text-white border-0 p-2" type="submit" onClick={handleNewStock}>
              Add
            </button>
          </form>
          
              
        </Modal.Body>
        {/* <Modal.Footer>
          <Button className="preview-btn " onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
        </div>
    )
}


export default InventoryModal;