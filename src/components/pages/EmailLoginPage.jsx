import React, {useEffect} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import {authAdd} from '../../app/auth'

function EmailLoginPage(props) {

    // useEffect(() => {
    //     localStorage.setItem('user', props.match.params.token)
    // }, [])
    
    return (
      <div className='postCardContainer'>
        <h1 style={{color: 'red'}}>Hello World</h1>
      </div>
    );
}

export default connect(null, {authAdd})(EmailLoginPage);