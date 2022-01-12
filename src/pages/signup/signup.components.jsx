import React, { Component } from 'react';
import './signup.styles.css'
 

export default class Signup extends Component {
    render() {
        return (       
            <div className='mt-6 signup-wrapper'>
                <div className='p-4 mt-4'>
               
                <h5 className='mt-4 mb-4 fw-bolder'>Sign Up Below</h5>
                <form className='row g-3'>
                    <div class="col-md-6 mb-4 ">
                        <label for="hospital" className="fw-bold form-label">Hospital/Lab Name:</label>
                        <input type="text" className="p-2 form-control" ></input>
                    </div>
                    <div class="col-md-6 mb-4">
                        <label for="email" className=" fw-bold form-label">Email:</label>
                        <input type="email" className="p-2 form-control" ></input>
                    </div>
                    <div class="col-md-6 mb-4">
                        <label for="phone-number" className=" fw-bold form-label">Phone Number:</label>
                        <input type="number" className="p-2 form-control" ></input>
                    </div>
                    <div class="col-md-6 mb-4">
                        <label for="address" className=" fw-bold form-label">Address:</label>
                        <input type="text" className="p-2 form-control" ></input>
                    </div>
                    <div class="col-md-6 mb-4">
                        <label for="password" className=" fw-bold form-label">Password:</label>
                        <input type="password" className="p-2 form-control" ></input>
                    </div>
                    <div class="col-md-6 mb-4">
                        <label for="confirm-password" className=" fw-bold form-label">Confirm Password:</label>
                        <input type="password" className="p-2 form-control" ></input>
                    </div>
                    <div class="flex-row d-flex justify-content-around">
                    <button type="submit" className="mt-4 btn btn-lg btn-danger">Create Your Account</button>
                     </div>
                </form>
                <div className='flex-row mt-4 d-flex justify-content-around'>
                    <p>By clicking on create your account, you agree to our <a href='#' className='link-danger text-decoration-none fw-bold'>Terms and Conditions</a></p>
                </div>
                
                </div>
                <div>

                </div>
            </div>
            
        )
    }
}
