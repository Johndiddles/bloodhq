import React from 'react';

import {Modal, Button } from 'react-bootstrap'

import './add-inventory-modal.styles.css';

function UpdateQuantity (props){
    console.log(props)
    const [blood_price, setBlood_price] = React.useState('');
    const [available_stock, setAvailable_stock] = React.useState('');
    const token = localStorage.getItem('userToken');


  const id = props.id

                                            
    fetch('https://bloodhq-be.herokuapp.com/api/v1/inventories/record/'+id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    }).then(response => response.json())
    .then(data => console.log(data))
    

    console.log(message)
    console.log(JSON.stringify(quantity))
  
    return (
        <div >
            <Modal
        {...props}
        size="lg"
        centered
        key={props}
       
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
              Add Quantity
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
          <div className="input-box">
                        <label htmlFor="blood_type">blood type</label>
                        <select 
                        className="box"
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
                        <label htmlFor="blood_price">blood price</label>
                        <input type="number" value={blood_price} onChange={(e)=> setBlood_price(e.target.value)} name="blood_price" placeholder="blood price" className="box" id={`${id}blood_price`} />
                    </div>  
                    <div className="input-box">
                        <label htmlFor="available_stock">blood price</label>
                        <input type="number" value={available_stock} onChange={(e)=> setAvailable_stock(e.target.value)} name="available_stock" placeholder="available stock" className="box" id={`${id}available_stock`} />

                    </div>   
                    
                    <button className="addButton bg-success text-white border-0 p-3" type="submit" onClick={() =>{
                      const id = props.id;
                      const token = localStorage.getItem('userToken')
                      fetch('https://bloodhq-be.herokuapp.com/api/v1/inventories/record/'+id, {
                        method: 'PUT',
                        headers: {
                          'Accept': 'application/json',
                          'Authorization': 'Bearer ' + token
                        }
                      }).then(response => response.json()).then(data => console.log(data))
                    }
                    }>
              Add
            </button>
          </form>          
        </Modal.Body>
        <Modal.Footer>
          <Button className="preview-btn " onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}


export default UpdateQuantity;