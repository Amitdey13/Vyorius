import React from 'react';
import Button from './button'
import logo from '../images/logo.png'

function Navbar(){
    return(
        <div>
            <ul className="navbar">
                <li className="brand"><img src={logo} alt="logo"/><span className="brand-name">VYORIUS</span></li>
                <div className="nav">
                    <li>Why Vyorius?</li>
                    <li>Solutions</li>
                    <li>Product</li>
                    <li>Use Cases</li>
                    <li>Team</li>
                    <li>Partners</li>
                    <li>Contact Us</li>
                </div>    
                <li className="launch"><Button color="white"  radius="10px"  bold="bold" size="17px" border="white" width="170px" height="40px" bgcolor="orangered" name="Launch Vyorius  >" /></li>
            </ul>
        </div>
    );
}

export default Navbar;