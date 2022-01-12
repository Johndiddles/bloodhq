import React from 'react';
const step3 = ({nextStep, handleChange, values, handleSubmit}) => {
    const Continue = e => {
        e.preventDefault();
        nextStep();
      }
return(
    <div>
        <div className="input-box">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={values.password} 
    onChange={handleChange('password')} placeholder="password" className="box" id="password" />
                    </div>
                    <div className="input-box">
                        <label htmlFor="password_confirmation">Confirm Password</label>
                        <input type="password" value={values.hospitalId} 
    onChange={handleChange('password_confirmation')} placeholder="Confirm Password" name="password_confirmation" className="box" id="password_confirmation" />
                    </div>
                    <div className="submit-button ">
                        <button className="box" onClick={handleSubmit}>Done</button>
                    </div>
    </div>
)
}
export default step3