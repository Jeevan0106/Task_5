import React from 'react';
import './App.css'; 

function AuthPage() {
  return (
    <div className="auth-container">
      <div className="auth-signin">
        <h2>Welcome Back!</h2>
        <p>To keep connected with us please login with your personal info.</p>
        <button className="auth-button">SIGN IN</button>
      </div>
      <div className="auth-signup">
        <h2>Sign Up</h2>
        <input type="text" placeholder="UserName" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="auth-button">SIGN UP</button>
      </div>
    </div>
  );
}

export default AuthPage;
