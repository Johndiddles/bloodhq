import React, { Component } from 'react';
import { Link, Redirect,useHistory, withRouter } from 'react-router-dom';
import {Dropdown} from 'react-bootstrap'

// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Navbar from 'react-bootstrap/Navbar'

import {Login, Button, PrimaryButton} from '../buttons/button.component';
// import Homepage from '../../pages/homepage/homepage.component'

import './nav.styles.css';

class Navigation extends Component {
    constructor(){
        super();
        this.state = {
            cart: '',
            notification: ''
        }
        this.logoutHandler = this.logoutHandler.bind(this);
      };

    
      
      componentDidMount(){
          const token = localStorage.getItem('userToken')

          Promise.all([
            fetch('https://bloodhq-be.herokuapp.com/api/v1/user/orders', {
                method: 'GET',
                headers: { 
                   'Content-Type': 'application/json',
                   'Authorization': 'Bearer ' + token
                }}),
            fetch('https://bloodhq-be.herokuapp.com/api/v1/cart', {
              method: 'GET',
              headers: { 
                 'Content-Type': 'application/json',
                 'Authorization': 'Bearer ' + token
              }})
        ]).then(function (responses){
            return Promise.all(responses.map(function(response){
                return response.json()
            }));
        }).then(data => this.setState({
            notification: data[0].data,
            cart: data[1].length
        })
        )

      }

      

        logoutHandler(){
          localStorage.clear();
          
          this.props.history.push("/login")
      }

    render (){
    const currentUser = localStorage.getItem('currentUser');
    const name = localStorage.getItem('name')
    return (

    <div className="navbar">
        <div className="navigation">
            {
                currentUser ? 
                <ul className="nav-list">
                    <li className="nav-list-item"><Link to='/bloods' className="nav-link">Home</Link></li>
                    <li className="nav-list-item"><Link to='/inventory' className="nav-link">Inventory</Link></li>
                </ul> 
                :
                <ul className="nav-list">
                    <li className="nav-list-item"><Link to='/' className="nav-link">Home</Link></li>
                    <li className="nav-list-item"><Link to='/about' className="nav-link">About</Link></li>
                    <li className="nav-list-item"><Link to='/how' className="nav-link">How</Link></li>
                    <li className="nav-list-item"><Link to='/why' className="nav-link">Why</Link></li>
                </ul>
            } 

            

            <div className="login-buttons">
            {
                currentUser ?
                <div className="nav-login-buttons">
                    <div className="user-bar">
                        <i className="bi bi-bell"><sup>{this.state.notification}</sup></i>
                        <Link className="nav-icons-link" to="/cart" ><i className="bi bi-cart3"><sup>{this.state.cart}</sup></i></Link>
                    </div>
                        <Dropdown className="dropdown-tog">
                            <Dropdown.Toggle variant='transparent' id="dropdown-basic" className="dropdown-tog">
                                <i className="bi bi-person-circle p-3"></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="w-100">
                                <Dropdown.Item><Link className="option" to='/profile'>Profile</Link></Dropdown.Item>
                                {/* <Dropdown.Item>
                                    <Link className='option' onClick={this.logoutHandler} to="/">Log out</Link>
                                </Dropdown.Item> */}
                                <Link className='logout-option' onClick={this.logoutHandler} to="/">Log out</Link>
                                
                            </Dropdown.Menu>
                        </Dropdown>
                    
               
                </div>
               
                :
                <div className="login-buttons">
                    <Link className='option' to='/signin' >
                    <Login>Login</Login>
                    </Link>
                    <Link to='/createaccount'> <Button>Register</Button></Link>
                </div>
                
            }

                
            </div>
        </div>
        
    </div>
    )
}
}

export default withRouter(Navigation);