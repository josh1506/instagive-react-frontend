import React from 'react';
import '../../style/common/Nav.css'
import logo from '../../img/Instagive-logo-2.png'

function Nav(props) {
    return (
        <nav className="navBar">
            <span>
                <a href="#" className='navLogo'>
                    <img src={logo} alt="logo" height='45px' className='logo' style={{ marginRight: 10 }} />
                    <p className='navLogoName'>InstaGive</p>
                </a>
                <span>
                    {/* Other nav links */}
                </span>
            </span>
            <span className='navLogin'>
                <a href="#" className='navLink'>Signup</a>
                |
                <a href="#" className='navLink'>Login</a>
            </span>
        </nav>
    );
}

export default Nav;