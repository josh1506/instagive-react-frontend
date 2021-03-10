import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import imgWave from '../../../img/wave.png'
import orgPhoto from '../../../img/org-image-content.png'
import unknownUserPhoto from '../../../img/unknown-user.png'
import checkPhoto from '../../../img/check.png'
import { Typography } from '@material-ui/core/';




function Content(props) {
    return (
        <div className='content-container'>
       
            <img src={imgWave} alt="wave" className='content-wave' />
        </div>
    );
}

export default Content;