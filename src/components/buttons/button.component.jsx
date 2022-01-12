import React from 'react';

import './button.styles.css';

const Button = ({children}) => (
    <button className="custom-buttons transparent">{children}</button>
)

const ButtonDrop = ({children}) => (
    <button className="custom-buttons btn-drop">{children} 
        <i className="bi bi-chevron-right"> </i>
    </button>
)

const Login = ({children}) => (
    <button className="login-btn mx-2">{children}</button>

)
const PrimaryButton = ({children}) => (
     <button className="primary-button">{children}</button>
			
)
const SecondaryButton = ({children}) => (
     <button className="secondary-button">{children}</button>
			
) 

const ButtonRight = ({children}) => (
    <button className="login-btn mx-0">{children} 
        <i className="bi bi-chevron-double-right"></i>
    </button>
)

export {Button, ButtonDrop, Login, PrimaryButton, SecondaryButton, ButtonRight};
