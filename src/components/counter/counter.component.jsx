import React from 'react'

import './counter.styles.css'


function Counter (){
    return (
        <div className="d-flex counter">
            <div className="inner">
                <h3>30+</h3>
                <p>cities</p>
            </div>
            <div className="inner mid">
                <h3>250+</h3>
                <p>partners</p>
            </div>
            <div className="inner">
                <h3>1000+</h3>
                <p>drones</p>
            </div>
        </div>
    )
}

export default Counter;