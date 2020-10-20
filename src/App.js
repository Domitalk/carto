import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomepageLayout from './pages/Homepage';
import LoginPage from './pages/LoginPage'

// TO DO 
// need to bring in react-router into here and make it so you can change views 
// also bring in reduxpthunk here 

function App() {
  return (
    <LoginPage />
    // <HomepageLayout />
  );
}

export default App;
