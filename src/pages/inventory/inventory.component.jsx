import React from 'react';
import { Component } from 'react';
import {Table } from 'react-bootstrap'
import InventoryModal from '../../components/add-inventory-modal/add-inventory-modal.component';

import './inventory.styles.css'


class Inventory extends Component {
    constructor(){
        super();

        this.state = {
            inventory: [],
            modalShow: false,
            updateStockShow: false,
            id: '',
            addData: '',
            dropData: ''
        }
    }

    componentDidMount(){
        const token = localStorage.getItem('userToken');

        fetch('https://bloodhq-be.herokuapp.com/api/v1/inventories', {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        }).then(response => response.json())
        .then(data => this.setState({
            inventory: data.data
        }))
    }

    handleAddToInventory = (props) => {
        const token = localStorage.getItem('userToken');
        const quantity = {
            'blood_qty': 5
        };
        
        fetch('https://bloodhq-be.herokuapp.com/api/v1/inventories/record/stock-up/'+`${props}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(quantity)
        }).then(response => response.json())
        .then(data => alert(data.message))

        console.log(this.props)
    } 



    render (){
        const {inventory, modalShow} = this.state;
        const name = localStorage.getItem('name');


        return (
            <div className="inventory">

                <div className="back-btn">
                    <i className="bi bi-arrow-left"></i>
                </div>

                <div className="welcome">
                    <h3>
                    Welcome back, <span>{name}</span>
                    </h3>
                    <p className="welcome-caption">
                        Here is your account overview 
                    </p>

                    <InventoryModal
                        show={modalShow}
                        onHide={() => this.setState({
                            modalShow: false
                        })}
                    />
                    
                                      
                </div>

                <div className="inventories-section">
                    <div className="inventories-table">
                        <div className="inventories-table-head">
                            <p className="inventory-notice">inventory</p> 
                            <button 
                            className="bg-success text-white add-inventory" 
                            onClick={() => this.setState({
                                modalShow: true
                            })}> <i className="bi bi-plus-circle"></i> Add New Items </button>
                        </div>  

                        <div className="inventory-table">
                        <Table striped bordered hover className="inventory-table">
                <thead className="table_head">
                    <tr>
                    <th>BLOOD ID</th>
                    <th>BLOOD</th>
                    <th>STOCK</th>
                    <th>SOLD</th>
                    <th>PRICE</th>
                    <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      inventory.map(inventoryItem => (
                          
                          <tr className="table-rows" key={inventoryItem.attribute.blood_id}>
                              <td className="table_data">{inventoryItem.attribute.blood_id}</td>
                              <td className="table_data" id="blood_type">{inventoryItem.attribute.blood_type}</td>
                              <td className="table_data">{inventoryItem.attribute.available_stock}</td>
                              <td className="table_data">{inventoryItem.attribute.total_sold_stock}</td>
                              <td className="table_data">{inventoryItem.attribute.blood_price}</td>
                              <td className="action_column">
                                  <div className="actions-wrapper">

                                      <form className="btn-group add">
                                        <input className="stockAddDrop" type="text" id={`add${inventoryItem.attribute.blood_id}`}/>
                                        <button className="bg-success action-btn text-white" onClick={(e) => {
                                            e.preventDefault();
                                            const qty = document.getElementById(`add${inventoryItem.attribute.blood_id}`).value
                                            const token = localStorage.getItem('userToken')
                                            const itemId = inventoryItem.attribute.blood_id;
                                            const quantity = {"blood_qty": qty}
                                            console.log(quantity)

                                            fetch('https://bloodhq-be.herokuapp.com/api/v1/inventories/record/stock-up/'+`${itemId}`, {
                                                    method: 'PATCH',
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                        'Authorization': 'Bearer ' + token
                                                    },
                                                    body: JSON.stringify(quantity)
                                                }).then(response => response.json())
                                                .then(data => alert(JSON.stringify(data.message) + '! \n \n Please refresh the page'))
                                                
                                        }} >Add</button>
                                      </form>
                                  
                                      


                                      <form className="btn-group drop">
                                        <input className="stockAddDrop" type="text" id={`drop${inventoryItem.attribute.blood_id}`}/>
                                        <button className="bg-danger action-btn text-white" onClick={(e) => {
                                            e.preventDefault();
                                            const positiveQty = parseInt(document.getElementById(`drop${inventoryItem.attribute.blood_id}`).value)

                                            const qty = `-${document.getElementById(`drop${inventoryItem.attribute.blood_id}`).value}`
                                            const token = localStorage.getItem('userToken')
                                            const itemId = inventoryItem.attribute.blood_id;
                                            const quantity = {"blood_qty": qty}
                                            console.log(quantity);

                                            if(positiveQty > parseInt(inventoryItem.attribute.available_stock)){
                                                alert('Drop amount cannot be greater than available stock')
                                            } else {
                                                fetch('https://bloodhq-be.herokuapp.com/api/v1/inventories/record/stock-up/'+`${itemId}`, {
                                                    method: 'PATCH',
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                        'Authorization': 'Bearer ' + token
                                                    },
                                                    body: JSON.stringify(quantity)
                                                }).then(response => response.json())
                                                .then(data => alert(JSON.stringify(data.message) + '! \n \n Please refresh the page'))
                                            }
                                        }} >Drop</button>
                                      </form>       
                                      
                                  </div>
                              </td>
                              
                          </tr>
                          
                      ))
                    }
                    
                </tbody>
                </Table>
                        </div>
                        
                    </div>
                    <div className="notifications-column">

                    </div>
                </div>

                
            </div>

        )
    }
}


export default Inventory;