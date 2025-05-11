
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import React from 'react';

const Home: React.FC = () => {
  return <h2>Home</h2>;
}
const About: React.FC = () => {
  return <h2>About</h2>;
}
const Contact: React.FC = () => {
  return <h2>Contact</h2>;
}

function App() {
  return (
    <Router>
      <Header />
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      asdf
    </Router>
   
  )
}

export default App
