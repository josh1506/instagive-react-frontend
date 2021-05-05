import React from 'react'

import {AppBar, Toolbar, Typography} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import logo from '../../img/Instagive-logo-2.png'


const Footer = ({ openModal, setModal }) => {
  return (
    <footer style={{display: 'flex', justifyContent:'space-between' ,background: '#26262b', padding: '15px 45px', color: 'white', position: 'relative' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', position: 'absolute', bottom: 0, paddingBottom: 30}}>
          <img src={logo} alt="img" height='35px' />
          <p style={{fontSize: 22, marginLeft: 5, paddingBottom: 5, paddingRight: 15}}>InstaGive</p>
          <p>Copyright &copy 2021 InstaGive. All rights reserved</p>
        </div>
      </div>
      <div>
        <p style={{ cursor: 'pointer', fontWeight: 'bold', fontSize: 20 }} onClick={() => setModal(!openModal)}>
          About us
        </p>
        <div>
          <p>Connect with us.</p>
          <div>
            <a href="https://www.facebook.com/Instagive-114092927169420" target="_blank" ><FacebookIcon color="primary" style={{fontSize: '35px'}}></FacebookIcon></a>
            <a href="mailto:instagive2021@gmail.com" target="_blank" ><EmailIcon color="primary" style={{fontSize: '35px'}}></EmailIcon></a>
          </div>
        </div>
      </div>
      {/* <Typography variant="h2" gutterBottom>
      </Typography> */}
    </footer>
  )
}

export default Footer;