import React from 'react'

import map from '../../assets/maps2.png';
import register from '../../assets/register.png';
import download from '../../assets/download.png';
import order from '../../assets/order.png';

import './guide.styles.css';

function Guide(){
    return (
        <div className="guide-wrapper">
            <div className="guide">
                <div className="guide-left">
                    <h4>put your hospital on the map</h4>
                    <p>Partner with us today</p>
                    <div className="guides">
                        <img src={register} alt="" />
                        Register and fill in your verification details
                    </div>
                    <div className="guides middle">
                        <img src={download} alt="" />
                        Download mobile app
                    </div>
                    <div className="guides">
                        <img src={order} alt="" />
                        order and sell blood
                    </div>
                </div>
                <div class="guide-right">
                    <div>
                        <img className="map" src={map} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guide;