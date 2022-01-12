import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import './createAccount.styles.css'
import CreateBody from '../../components/createBody/createBody.components.jsx';
import PrevBtn from '../../components/prevBtn/prevBtn.components.jsx';
import Step1 from '../../components/step1/step1.components.jsx';
import Step2 from '../../components/step2/step2.components.jsx';
import Step3 from '../../components/step3/step3.components.jsx';

import axios from 'axios';

export default class CreateAccount extends Component {
  constructor(){
    super();
    this.state = {
      step: 1,
      fullname: "",
      email: "",
      phone: "",
      password: "",
      password_confirmation: "",
      address: "",
      city: "",
      state: "",
      redirect: false
  }

  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {fullname, email, phone, password, password_confirmation, address, city, state } = this.state;

    const signup_details = {address, city, email, fullname, password, phone, state};
    

    const loginDetails = {email, password}
    
    this.setState({redirect: true});

    axios.post('https://bloodhq-be.herokuapp.com/api/v1/register', {
      address: this.state.address,
      city: this.state.city,
      email: this.state.email,
      fullname: this.state.fullname,
      password: this.state.password,
      phone: this.state.phone,
      password_confirmation: this.state.password_confirmation,
      state: this.state.state
    })
    .then(res => {
      if(res.data.message === 'Registration successful'){
        

        localStorage.setItem('currentUser', JSON.stringify(res.data.user));
        localStorage.setItem('name', res.data.user.fullname);
        localStorage.setItem('userToken', res.data.token)

        
        console.log(res.data)
        alert('Hello ' + res.data.user.fullname + "! \n " + res.data.message);
        window.location.reload(false)
        return <Redirect to='/bloods' />


        console.log(res.data)
        alert(JSON.stringify(res.data.message))
      }
      }
    ).catch(err => {
      if(err = 'Error: Request failed with status code 422'){
        console.log(err.message)
        alert('Oooops! \n All fiels are required!!! \n Passwords and Password Confirmation entries must also match')
      }
    })

    // fetch('https://bloodhq-be.herokuapp.com/api/v1/login', {
    //         method: 'POST',
    //         headers: { 
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(loginDetails)
    //     })
    //     .then((response) => response.json())
    //     .then(data => {
    //         if(data.message !== 'User credentials do not match our records'){
    //             this.setState({redirect: true});

    //             localStorage.setItem('currentUser', JSON.stringify(data.user));
    //             localStorage.setItem('name', data.user.fullname);
    //             localStorage.setItem('userToken', data.token)

    //             alert('Hello ' + data.user.fullname + "! " + data.message);
    //             window.location.reload(false)
    //             return <Redirect to='/bloods' />
                
    //         } else {
    //             alert('Invalid Credentials');
    //         }
    //     })
    //     .catch(error => {
    //         alert(error);
    //         console.error("Error fetching user: " + error);
    //         })

  }

    


    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
      }
      nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
      }
      handleChange = any => e => {
        const { name, value} = e.target;
        this.setState({
          [name] : value
        })
        // this.setState({ [any]: e.target.value });
      }
     
      
    

    render() {
      if (this.state.redirect) {
        return <Redirect to="/bloods" />;
      }
      const login = localStorage.getItem("isLoggedIn");
      if (login) {
        return <Redirect to="/home" />;
      }

         const { step } = this.state;
         const {fullname, email, phone, password, password_confirmation, address, city, state } = this.state;
         const values = {fullname, email, phone, password, password_confirmation, address, city, state };
         
            
         switch (step) {
            case 1: 
              return (
                  <CreateBody step = {step} stepType= {<Step1 nextStep = {this.nextStep}  handleChange = {this.handleChange} values ={values}  />}/>
                
              )
            case 2: 
              return (
                <CreateBody step = {step} prevBtn = {<PrevBtn prevStep = {this.prevStep} />} stepType= {<Step2 nextStep = {this.nextStep}  handleChange = {this.handleChange} values =  {values}  />}/>
              )
            case 3: 
              return (
                <CreateBody step = {step} prevBtn = {<PrevBtn prevStep = {this.prevStep} />} stepType= {<Step3 nextStep = {this.nextStep}  handleChange = {this.handleChange} values =  {values} handleSubmit={this.handleSubmit} />}/>
              )
            
            // never forget the default case, otherwise VS code would be mad!
            default: 
               // do nothing
          }
    
    }
  }