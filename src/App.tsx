import React from 'react';
import Nav from './components/Nav/Nav';
import './App.css';
import GoogleIcon from './google_icon.png';
function App() {
  return (
    <div className="App">
      <Nav />
      <img src={GoogleIcon} alt="Google" />
    </div>
  );
}

export default App;
