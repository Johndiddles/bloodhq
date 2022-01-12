import React from 'react';

import {Link } from 'react-router-dom';
import { ButtonRight } from '../buttons/button.component';
import Counter from '../counter/counter.component';
import doctor from '../../assets/doctor.png';
import './cover.styles.css'

function Cover(){
    return (
        <div className="cover-wrapper">
            <div className="inner-wrapper">
                <div className="cover-right">
                    <h2 className="cover m-0 p-0">Saving Lives by Revolutionizing the way Blood is Delivered</h2>
                    <p className="sub-text">Cover all your blood purchases, sales and logistic needs...</p>
                    <Link className="register-btn" to="/createaccount">Register <i className="bi bi-chevron-right"></i><i className="bi bi-chevron-right"></i><i className="bi bi-chevron-right"></i></Link>
                    <Counter></Counter>
                </div>
                <div className="left">
                    <img className="" src={doctor} alt="" />
                </div>
            </div>
                
                
            </div>
            
            
    )
}

export default Cover;