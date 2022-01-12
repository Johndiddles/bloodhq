import React from 'react';
import arrow from '../../assets/arrow.svg';
const prevBtn = ({prevStep}) => {
    const Back = e => {
        e.preventDefault();
        prevStep();
      }
    return(
        <div onClick={Back} class="arrow">
                        <img src={arrow} alt="arrow" />
                </div>
    )
}
export default prevBtn