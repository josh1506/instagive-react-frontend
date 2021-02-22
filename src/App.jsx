import React, { useEffect, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Nav from './components/common/Nav';
import LandingPage from './components/pages/landingPage/LandingPage';
import DetailsPage from './components/pages/detailsPage/DetailsPage';
import AuthPage from './components/pages/authPage/AuthPage';
import UserPage from './components/pages/userPage/UserPage';
import AdminPage from './components/pages/adminPage/AdminPage';
import PostContext from './context/postContext'
import './App.css';
import NotFound from './components/common/NotFound';
import AccountList from './context/accountList';

function App() {
  const [post, setPost] = useState([])
  const [accountList, setAccountList] = useState([])

  useEffect(() => {
    // Run API here
    // axios post
    // axios list
    setPost([])
    setAccountList([])
  }, [])

  return (
    <PostContext.Provider value={post}>
      <AccountList.Provider value={accountList}>
        <div className="App">
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
      </AccountList.Provider>
    </PostContext.Provider>
  );
}

export default App;
