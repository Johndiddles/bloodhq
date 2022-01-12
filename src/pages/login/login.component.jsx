import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';

import {Alert } from 'react-bootstrap'


import ads from '../../assets/ads-login-bg.png';

import './login.styles.css'

class LoginForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            redirect: false,
            isLoading: false,
            msg: '',
            errMsgEmail: '',
            errMsgPwd: '',
            errMsg: ''

        }
    }
    handleChange = (e) => {
        const { name, value} = e.target;
        this.setState({
          [name] : value
        });
    }
    
    handleSubmit = (e) =>{
        e.preventDefault();

        const {email, password} = this.state;

        const loginDetails = {email, password}
        
        this.setState({ isLoading: true});

        fetch('https://bloodhq-be.herokuapp.com/api/v1/login', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginDetails)
        })
        .then((response) => response.json())
        .then(data => {
            if(data.message !== 'User credentials do not match our records'){
                this.setState({redirect: true});

                localStorage.setItem('currentUser', JSON.stringify(data.user));
                localStorage.setItem('name', data.user.fullname);
                localStorage.setItem('userToken', data.token)

                

                // alert('Hello ' + data.user.fullname + "! " + data.message);
                // return <Redirect to='/bloods'/>
                // window.location.reload(false)
                
            } else {
                alert('Invalid Credentials');
            }
        })
        .catch(error => {
            alert(error);
            console.error("Error fetching user: " + error);
            })
    }

    render (){
        if (this.state.redirect) {
            return <Redirect to="/bloods" />
          }
          const login = localStorage.getItem("isLoggedIn");
          if (login) {
            return <Redirect to="/home" />;
          }



        return (
            
            <div className="form-wrapper">
                <div  id="sign-in-body">
                    
                    <div id="signin">
                        <div className="ads">
                            <img src={ads} alt="advert" />
                        </div>
                        <div className="form-container">
                            <div className="container-head">
                               
                            <div className="form-content">
                                
                            
                                <h3>Sign In</h3>
                                <p>Please Sign in to Continue to BloodHQ</p>

                                <form action="#">                                   
                                <div className="input-box">
                        <label htmlFor="email">E-mail Address</label>
                        <input type="email" value={this.state.email} 
    onChange={this.handleChange} name="email" placeholder="E-mail Address" className="box" id="email" required />
                    </div>
                    <div className="input-box">
                        <label htmlFor="Phone">Password</label>
                        <input type="password" value={this.state.phone} 
    onChange={this.handleChange} name="password" placeholder="Password" className="box" id="password" />
                    </div>

                    <div className="forgot-password-link">
                        <Link to='/forgot-password' className="forgot-link">Forgot Password?</Link>
                    </div>
                    
                    <div className="submit-button ">
                        <button className="box" onClick={this.handleSubmit}>Continue</button>
                    </div>
                                    
                            </form>
                            
                            <div className="login-footer">
                                Don't have an account? <span><Link to='/createaccount' className="signup-link">Sign up</Link></span>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" value={this.state.password} onChange={this.handleChange} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                    Submit
                </Button>
                </Form> */}
            </div>
        )
    }
}


export default LoginForm