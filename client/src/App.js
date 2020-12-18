import './styles/main.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Signup from './components/SignupForm/SignupForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Signup />
      </div>
    );
  }
}

export default App;
