import React from 'react';
import '../../style/Nav.css'
import logo from '../../img/Instagive-logo-2.png'

function Nav(props) {
    return (
        <nav class="navBar">
            <span class='navLogo'>
                <img src={logo} alt="logo" height='45px' style={{ marginRight: 10 }} />
                <p>InstaGive</p>
                <span>
                    {/* Other nav links */}
                </span>
            </span>
            <span class='navLogin'>
                <a href="#" className='navLink'>Signup</a>
                /
                <a href="#" className='navLink'>Login</a>
            </span>
        </nav>
    );
}

export default Nav;