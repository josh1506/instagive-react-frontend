import React, { useEffect, useState } from 'react';
import '../../style/common/Nav.css'
import logo from '../../img/Instagive-logo-2.png'
import { Link, NavLink } from 'react-router-dom';

function Nav(props) {
    const [userAuth, setUserAuth] = useState({ token: '', type: '' })

    useEffect(() => {
        const token = localStorage.getItem('user') || localStorage.getItem('admin')
        const type = localStorage.key(token)
        setUserAuth({ token, type })
    })

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
                {userAuth.token ?
                    <span>
                        {userAuth.type === 'user' ?
                            <span>
                                <NavLink to="/user/ledger" className='navLink'>Ledger</NavLink>
                                <NavLink to="/user" className='navLink'>Dashboard</NavLink>
                                <NavLink to="/user/change-password" className='navLink'>ChangePassword</NavLink>
                            </span> : ''
                        }
                        <NavLink to='/' className='navLink' onClick={() => {
                            localStorage.removeItem('user')
                            localStorage.removeItem('admin')
                            setUserAuth('')
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

export default Nav;