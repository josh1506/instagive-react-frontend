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

function App() {
  const [post, setPost] = useState([])

  useEffect(() => {
    // Run API here
    setPost([
      {
        id: '1',
        img: {
          src: 'https://i.pinimg.com/564x/8c/7c/f4/8c7cf4bbcb6a268cac135dc569275a71.jpg',
          alt: 'photo 1'
        },
        postTitle: 'Help David Gulpilils siblings visit',
        postDetails: 'Yolngu Elder David Gulpilil has been in Adelaide for some time receiving treatment for terminal cancer. As he is unable to travel back to his home of Ramingining, it has been some time since he last saw family'
      }, {
        id: '2',
        img: {
          src: 'https://i.pinimg.com/564x/8c/7c/f4/8c7cf4bbcb6a268cac135dc569275a71.jpg',
          alt: 'photo 2'
        },
        postTitle: 'Please Help Ryoko Fight Stage 4 Cancer',
        postDetails: 'My beloved sister, Ryoko has terminal cancer, stage 4. It was only discovered two months ago on July 16, 2020. Both of us are Japanese, but Ryoko has lived in Paris for 16 years and I live in Malaysia.'
      }, {
        id: '3',
        img: {
          src: 'https://i.pinimg.com/564x/8c/7c/f4/8c7cf4bbcb6a268cac135dc569275a71.jpg',
          alt: 'photo 2'
        },
        postTitle: 'Typhoon Ulysses',
        postDetails: 'Hello everyone! Cora here. Typhoons Ulysses and Rolly battered us with strong winds and submerged cities including Marikina, Rizal, Cam Sur and Tuguegarao in Cagayan. Thousands have been displaced from their homes and some are still waiting to be rescued.'
      }, {
        id: '4',
        img: {
          src: 'https://i.pinimg.com/564x/8c/7c/f4/8c7cf4bbcb6a268cac135dc569275a71.jpg',
          alt: 'photo 2'
        },
        postTitle: 'Help Baby Khloe',
        postDetails: 'We are in need of financial assistance to help Baby Khloe Vitto be released from Hospital. Currently unemployed we didnt know where to get any money to pay for her bills.'
      }
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
          <Route path='/admin' component={AdminPage} />
          <Route path='/' exact component={LandingPage} />
        </Switch>
      </div>
    </PostContext.Provider>
  );
}

export default App;
