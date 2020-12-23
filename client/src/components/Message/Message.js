import React, { Component } from 'react';
import axios from 'axios';

const url = 'http://localhost:8000';

class Message extends Component {
  state = {
    email: '',
    content: '',
  };

  sendMessage = async e => {
    e.preventDefault();

    const msg = {
      email: this.state.email,
      content: this.state.content,
    };
    console.log(msg);

    try {
      const res = await axios.post(`${url}/messages/add`, msg);
      if (res.status === 201) {
        alert('Your whishes have been sent');
        console.log(res.data);
      }
    } catch (e) {
      alert('Failed to send your wishes...');
    }

    this.setState({
      email: '',
      content: '',
    });
  };

  render() {
    return (
      <>
        <section className="container">
          <div className="segment">
            <h2>Compose your wishes</h2>
            <form className="ui form">
              <div className="field">
                <label className="label" htmlFor="email">
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
                <label className="label" htmlFor="message">
                  Your message
                </label>
                <textarea
                  type="text"
                  value={this.state.content}
                  onChange={e => {
                    this.setState({ content: e.target.value });
                  }}
                  required
                />
              </div>

              <button className="button" type="submit">
                Send!
              </button>
            </form>
          </div>
        </section>
      </>
    );
  }
}

export default Message;
