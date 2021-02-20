import React from 'react';
import '../../style/common/Nav.css'
import logo from '../../img/Instagive-logo-2.png'
import { Link, NavLink } from 'react-router-dom';

function Nav(props) {
    return (
        <nav className="navBar">
            <span>
                <Link to="/" className='navLogo'>
                    <img src={logo} alt="logo" height='45px' className='logo' style={{ marginRight: 10 }} />
                    <p className='navLogoName'>InstaGive</p>
                </Link>
                <span>
                    {/* Other nav links */}
                </span>
            </span>
            <span className='navLogin'>
                <NavLink to="/auth/register" className='navLink'>Signup</NavLink>
                |
                <NavLink to="/auth/login" className='navLink'>Login</NavLink>
            </span>
        </nav>
    );
}

export default Nav;