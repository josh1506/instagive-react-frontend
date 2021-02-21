import React, { useEffect, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Nav from './components/common/Nav';
import LandingPage from './components/pages/landingPage/LandingPage';
import DetailsPage from './components/pages/detailsPage/DetailsPage';
import AuthPage from './components/pages/authPage/AuthPage';
import UserPage from './components/pages/userPage/UserPage';
import AdminPage from './components/pages/adminPage/AdminPage';
import PostContext from './contex/postContext'
import './App.css';
import NotFound from './components/common/NotFound';

function App() {
  const [post, setPost] = useState([])

  useEffect(() => {
    // Run API here
    setPost([
      {
        id: '1',
        User: 'asdasd',
        Title: 'asdasd',
        datePosted: 'asdasd',
        profilePic: 'asdasd',
        imageList: [],
        description: 'asdasdasdasdasdasd',
        totalAmount: 0,
        currentAmount: 0,
        totalDonors: 0,
        totalUpdates: 0,
      },
      {
        id: '2',
        User: 'zxczxc',
        Title: 'zxczxc',
        datePosted: 'czxczx',
        profilePic: 'zxcxczc',
        imageList: [],
        description: 'zxczxczczxczxczxczxczxczxczxc',
        totalAmount: 0,
        currentAmount: 0,
        totalDonors: 0,
        totalUpdates: 0,
      },
      {
        id: '3',
        User: 'qweqweqw',
        Title: 'qweqweqwe',
        datePosted: 'qweqweqweqwe',
        profilePic: 'qweqweqw',
        imageList: [],
        description: 'qweqweqweweqweqweqweqweqweqwewe',
        totalAmount: 0,
        currentAmount: 0,
        totalDonors: 0,
        totalUpdates: 0,
      },
    ])
  }, [])

  return (
    <PostContext.Provider value={post}>
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
    </PostContext.Provider>
  );
}

export default App;
