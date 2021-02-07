import logo from './logo.svg';
import './App.css';
import Nav from './components/common/Nav';
import LandingPage from './components/pages/landingPage/LandingPage';
import DetailsPage from './components/pages/detailsPage/DetailsPage';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <LandingPage /> */}
      <DetailsPage />
    </div>
  );
}

export default App;
