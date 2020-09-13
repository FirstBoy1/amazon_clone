import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { auth } from './firebase';

import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const signin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => history.push('/'))
      .catch((err) => alert(err.message));
  };

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => history.push('/'))
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          className="login__logo"
          alt="amazon logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>

        <form onSubmit={signin}>
          <h5>Email</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />

          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />

          <button className="login__signInButton">Sign in</button>
        </form>

        <p>
          By singing'in you agree to Amazon's Conditions to use & sale. Please
          see our Privacy Notice, our cookies Notice and Interest based Ads
          notice.
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
