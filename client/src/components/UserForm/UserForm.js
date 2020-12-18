import React from 'react';

const UserForm = () => {
  return (
    <>
      <section className="container md:flex">
        <h3>Let's begin with some quick information:</h3>
        <div className="segment register">
          <form className="ui form">
            <div className="field">
              <label className="label" htmlFor="name">
                Name
              </label>
              <input type="text" placeholder="Your full name" />
            </div>

            <div className="field">
              <label className="label" htmlFor="email">
                Email
              </label>
              <input type="text" placeholder="example@something.com" />
            </div>

            <div className="field">
              <label className="label" htmlFor="password">
                Password
              </label>
              <input type="text" />
            </div>
            <button className="button register" type="submit">
              Register
            </button>
          </form>
        </div>

        <h3>Sign in to your account</h3>
        <div className="segment login">
          <form className="ui form">
            <div className="field">
              <label className="label" htmlFor="email">
                Email
              </label>
              <input className="label" type="text" />
            </div>

            <div className="field">
              <label className="label" htmlFor="password">
                Password
              </label>
              <input type="text" />
            </div>

            <button className="button signin" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default UserForm;
