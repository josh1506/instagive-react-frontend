import logo from './logo.svg';
import './App.css';
import Nav from './components/common/Nav';
import LandingPage from './components/pages/landingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Nav />
      <LandingPage />
    </div>
  );
}

export default App;
