import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotHome from './pages/NotHome/NotHome';

const Default = () => <h1>My Website Yay!</h1>;

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path= "/home" element={<Home />} />
        <Route path="/nothome" element={<NotHome />} />
      </Routes>
    </div>
  );
}

export default App;
