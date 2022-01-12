import React from 'react';

import { Link } from 'react-router-dom';

import phone from '../../assets/phone.png';
import check from '../../assets/check.png';
import trusted from '../../assets/trusted.png';
import speed from '../../assets/speed.png';
import friendly from '../../assets/friendly.png'

import {ButtonDrop} from '../buttons/button.component'


import './why.styles.css'

const Why =()=> (
    <div className="why-outer-wrapper">
        <div className="why-wrapper">
            <div className="why-left">
                <div className="phone">
                    <img src={phone} alt="" />
                </div>
            </div>
            <div className="why-right">
                <h4>more than one of a kind</h4>
                <p>All for free</p>
                <div className="checks">
                    <img src={check} alt="" />
                    Mapping And Tracking System
                </div>
                <div className="checks">
                    <img src={check} alt="" />
                    one click order
                </div>
                <div className="checks">
                    <img src={check} alt="" />
                    autonomous flight system
                </div>
                <div className="register-button">
                <Link className="register-btn" to="/createaccount">Register <i className="bi bi-chevron-right"></i><i className="bi bi-chevron-right"></i><i className="bi bi-chevron-right"></i></Link>
                </div>        
            </div>
        </div>
        <div className="trusted-wrapper">
            <div className="trusted">
                <img src={speed} alt="" />
                Speedy Delivery
            </div>
            <div className="trusted">
                <img src={friendly} alt="" />
                Customer Friendly
            </div>
            <div className="trusted">
                <img src={trusted} alt="" />
                Tested and Trusted
            </div>
        </div>
    </div>
    
)

export default Why;