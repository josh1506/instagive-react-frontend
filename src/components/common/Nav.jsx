import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

import { authRemove } from '../../app/auth'
import logo from '../../img/Instagive-logo-2.png'
import '../../style/common/Nav.css'

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
                {props.auth.token ?
                    <span>
                        {props.auth.type === 'user' ?
                            <span>
                                <NavLink to="/user/ledger" className='navLink'>Ledger</NavLink>
                                <NavLink to="/user" className='navLink'>Dashboard</NavLink>
                                <NavLink to="/user/change-password" className='navLink'>ChangePassword</NavLink>
                            </span> : ''
                        }
                        <NavLink to='/' className='navLink' onClick={() => {
                            localStorage.removeItem('user')
                            localStorage.removeItem('admin')
                            props.authRemove()
                        }}>Logout</NavLink>
                    </span> :
                    <span>
                        <NavLink to="/auth/register" className='navLink'>Signup</NavLink>
                        |
                        <NavLink to="/auth/login" className='navLink'>Login</NavLink>
                    </span>
                }
            </span>
        </nav>
    );
}


const mapStateToProps = state => {
    return { auth: state.auth }
}

export default connect(mapStateToProps, { authRemove })(Nav);