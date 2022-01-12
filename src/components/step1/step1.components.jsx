import React from 'react';
const step1 = ({nextStep, handleChange, values}) => {
    const Continue = e => {
        e.preventDefault();
        nextStep();
      }
    return (
        <div>                    
            <div className="input-box">
                        <label htmlFor="fullname">Hospital Name</label>
                        <input type="text" value={values.fullname} 
    onChange={handleChange('fullname')} placeholder="Full name of hospital" name="fullname" className="box" id="fullname" />
                    </div>
            <div className="input-box">
                        <label htmlFor="email">E-mail Address</label>
                        <input type="email" value={values.email} 
    onChange={handleChange('email')} name="email" placeholder="johndoe@gmail.com" className="box" id="email" required />
                    </div>
                    <div className="input-box">
                        <label htmlFor="Phone">Phone Number</label>
                        <input type="tel" value={values.phone} 
    onChange={handleChange('phone')} name="phone" placeholder="08012345678" className="box" id="phone" />
                    </div>
                    
                    <div className="submit-button ">
                        <button className="box" onClick={Continue}>Continue</button>
                    </div>
                
        </div>
    )
}
export default step1