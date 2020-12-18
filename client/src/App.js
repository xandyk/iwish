import './styles/main.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import UserForm from './components/UserForm/UserForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <UserForm />
      </div>
    );
  }
}

export default App;
