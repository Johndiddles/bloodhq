import React from 'react';
import Select from 'react-select';
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const step2 = ({ nextStep, handleChange, values }) => {
   
    const Continue = e => {
        e.preventDefault();
        nextStep();
      }
   
    return (
        <div>
            <div className="input-box">
                <label htmlFor="address">Hospital Address</label>
                <input type="text" value={values.address} 
    onChange={handleChange('address')} placeholder="Your hospital's address" name="address" className="box" id="address" />
            </div>
            <div className="input-box">
                <label htmlFor="city">City</label>
                <input type="text" value={values.city} 
    onChange={handleChange('city')} placeholder="City" name="city" className="box" id="city" />
                {/* <Select value={values.city} 
    onChange={handleChange('city')}
                    options={options} /> */}
            </div>
            <div className="input-box">
                <label htmlFor="State">State</label>
                <input type="text" value={values.state} 
    onChange={handleChange('state')} placeholder="state" name="state" className="box" id="state" />
    </div>
            
            <div className="submit-button ">
                <button className="box" onClick={Continue}>Continue</button>
            </div>
        </div>
    )
}
export default step2



