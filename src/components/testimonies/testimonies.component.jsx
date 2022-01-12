import React from 'react';

import './testimonies.styles.css';


class Testimonies extends React.Component {
    render(){
        return (
            <div className="container testimonies-section">
                <div className="row">
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                        <h4>our partners say</h4>
                        <p>More than anything else, we care about your experience</p>
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column">
                        <div className="testimonies first">
                            <h4>Really well thought</h4>
                            <p>“BloodHQ is really well thought in terms of everything. Their support team is amazing.”</p>
                            <p className="author">Dr. Ruth</p>
                        </div>
                        <div className="testimonies second">
                            <h4>Thank you</h4>
                            <p>“It is just perfect for my Hospital. It has top notch quality. And the icing on top is it is very cost effective!”</p>
                            <p className="author">Dr. Richard</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Testimonies;