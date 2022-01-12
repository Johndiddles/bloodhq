import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../../assets/logo.svg'
import Navigation from '../nav/nav.components'
import {Button, ButtonDrop, Login} from '../buttons/button.component';

import './header.styles.css';

function Header(){
    const [showMenu, setShowMenu] = useState(false)

    let menu;

    if(showMenu){
        menu = <div className="showMenu">
            <Navigation></Navigation>
        </div>
    }
    

    return (
        
        <div className="header-wrapper fixed-top">
             <div className="brand">
        <img src={logo} alt="logo" />
    </div>
            <i className="ham-menu" 
                onClick={() => setShowMenu(!showMenu)}
                >
                    <Button>
                    <FaBars />
                    </Button>
                    </i>
            <div className="navigation-wrapper">    
                <Navigation></Navigation>
            </div>   
            { menu }
        </div>
    
    )
}

export default Header;