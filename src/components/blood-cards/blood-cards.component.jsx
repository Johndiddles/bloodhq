import React from 'react';

import BloodPreview from '../../components/blood-preview/blood-preview.components'

import bloodImage from '../../assets/blood3.png';

import './blood-cards.styles.css';

function BloodCard (props){
    const [modalShow, setModalShow] = React.useState(false);
    
    return (
    <div className="d-flex flex-column blood-cards g-4" key={props.blood.id}>
        <i className="bi bi-droplet text-danger blood-icon"></i>
        {/* <img src={bloodImage} alt="blood" className="card-image" /> */}
        <div className="blood-details">
            <div className="blood-details-top">
                <h3>{props.blood.blood_type}</h3>
            </div>
            <h5 className="hospital-name">Location: {props.blood.city}</h5>
            
            <button className="preview-btn" key={props.blood.id} onClick={() => 
                setModalShow(true)}
                >
                    Preview
                </button>
            <BloodPreview
            details={props.blood}
          show={modalShow}
          onHide={() => setModalShow(false)}
          
        />
        </div>
    </div>
    )
}

export default BloodCard