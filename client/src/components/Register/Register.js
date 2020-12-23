import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

const url = 'http://localhost:8000';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  // Reset form

  submitRegister = async e => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    // console.log(userData);

    try {
      const res = await axios.post(`${url}/users/register`, data);

      if (res.status === 201) {
        alert('You are registered!');
        console.log(res.data);
      }
    } catch (error) {
      alert('Error: This Email is already registered!');
    }

    this.setState({
      name: '',
      email: '',
      password: '',
    });
  };

  render() {
    return (
      <>
        <section className="container">
          <div className="segment">
            <h2>Let's begin with some quick information</h2>
            <form className="ui form" onSubmit={this.submitRegister}>
              <div className="field">
                <label className="label" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  value={this.state.name}
                  onChange={e => {
                    this.setState({ name: e.target.value });
                  }}
                  required
                />
              </div>

              <div className="field">
                <label className="label email" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  value={this.state.email}
                  onChange={e => {
                    this.setState({ email: e.target.value });
                  }}
                  required
                />
              </div>

              <div className="field">
                <label className="label password" htmlFor="password">
                  Password
                </label>
                <input
                  type="text"
                  value={this.state.password}
                  onChange={e => {
                    this.setState({ password: e.target.value });
                  }}
                  required
                />
              </div>

              <button className="button register" type="submit">
                Register
              </button>
            </form>
          </div>
        </section>
      </>
    );
  }
}

export default Register;
