import React from 'react';

const Signup = () => {
  return (
    <>
      <section className="container">
        <div className="segment register">
          <h2>Let's begin with some quick information</h2>
          <form className="ui form">
            <div className="field">
              <label className="label" htmlFor="name">
                Full Name
              </label>
              <input type="text" />
            </div>

            <div className="field">
              <label className="label email" htmlFor="email">
                Email
              </label>
              <input type="text" />
            </div>

            <div className="field">
              <label className="label password" htmlFor="password">
                Password
              </label>
              <input type="text" />
            </div>
            <button className="button register" type="submit">
              Register
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Signup;
