import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Nav from './components/common/Nav';
import LandingPage from './components/pages/landingPage/LandingPage';
import DetailsPage from './components/pages/detailsPage/DetailsPage';
import AuthPage from './components/pages/authPage/AuthPage';
import UserPage from './components/pages/userPage/UserPage';
import AdminPage from './components/pages/adminPage/AdminPage';
import PostContext from './context/postContext';
import NotFound from './components/common/NotFound';
import AccountList from './context/accountList';
import UserLedger from './context/userLedger';
import './App.css';

const axios = require('axios');

function App() {
  const [post, setPost] = useState([])
  const [userLedger, setUserLedger] = useState([])
  const [accountList, setAccountList] = useState({
    accepted: [],
    pending: [],
    rejected: []
  })

  useEffect(() => {
    // Run API here
    // axios post
    // axios list
    setPost([]);
    const getAllData = async () => {
      await axios
        .get('http://localhost:5000/admin/getusers')
        .then((data) => setAccountList(data.data));

      await axios.get('http://localhost:5000/landing')
        .then((data) => console.log(data.data))

      // got ledger post here
      // await axios.get('')
      //   .then((data) => setUserLedger(data.data));
    };

    getAllData();
  }, []);

  return (
    <PostContext.Provider value={post}>
      <AccountList.Provider value={accountList}>
        <UserLedger.Provider value={userLedger}>
          <div className='App'>
            <Nav />
            <Switch>
              <Route path='/details/:id' component={DetailsPage} />
              <Route path='/auth' component={AuthPage} />
              <Route path='/user' component={UserPage} />
              <Route path='/not-found' component={NotFound} />
              <Route path='/admin' component={AdminPage} />
              <Route path='/' exact component={LandingPage} />
              <Redirect to='/not-found' />
            </Switch>
          </div>
        </UserLedger.Provider>
      </AccountList.Provider>
    </PostContext.Provider>
  );
}

export default App;
