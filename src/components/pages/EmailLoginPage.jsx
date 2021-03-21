import React, { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import { authAdd } from '../../app/auth';

function EmailLoginPage(props) {
  useEffect(() => {
    const token = props.match.params.token
    props.authAdd(token, 'user')
    localStorage.setItem('user', token)
    props.history.push('/')
  }, [])

  return (
    <div className='postCardContainer'>
    </div>
  );
}

export default connect(null, { authAdd })(EmailLoginPage);
