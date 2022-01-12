import React from 'react';
import {Link} from 'react-router-dom'
import ads from '../../assets/ads.svg';

import logo from '../../assets/logo.svg';
const body = ({step, stepType, prevBtn}) => {
    
return(
    <div  id="sign-in-body">
    <div id="signin">
        <div className="ads">
            <img src={ads} alt="advert" />
        </div>
            <div className="form-container">
                <div className="container-head">
                    {prevBtn}
                        <ul className="steps">
                            <li className={step === 1 ? "active" : ""}></li>
                            <li className={step === 2 ? "active" : ""}></li>
                            <li className={step === 3 ? "active" : ""}></li>
                        </ul>
                    </div>
                    <div className="form-content">
                        <h3>Create an Account</h3>
                        <p>By continuing you agree with our terms of service and Privacy Policy </p>
                        <form action="#">{stepType}</form>
                    </div>
                </div>
                </div>
                </div>
)}
export default body