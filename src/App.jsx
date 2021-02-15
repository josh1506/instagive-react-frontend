import logo from './logo.svg';
import './App.css';
import Nav from './components/common/Nav';
import LandingPage from './components/pages/landingPage/LandingPage';
import DetailsPage from './components/pages/detailsPage/DetailsPage';
import AuthPage from './components/pages/authPage/AuthPage';
import UserPage from './components/pages/userPage/UserPage';
import AdminPage from './components/pages/adminPage/AdminPage';

function App() {
  return (
    <div className="App">
      <Nav />
      <LandingPage />
      {/* <DetailsPage /> */}
      {/* <AuthPage /> */}
      {/* <UserPage /> */}
      {/* <AdminPage /> */}

    </div>
  );
}

export default App;
