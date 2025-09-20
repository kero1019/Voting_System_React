import LandingPage from './Components/LandingPage';
import Home from "./Components/Home"
import Features from './Components/Features';
import About from './Components/About';
import ErrorPage from './Components/ErrorPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App-container">
      <BrowserRouter>
      <Navbar />  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
