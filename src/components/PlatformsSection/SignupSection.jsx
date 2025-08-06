import React, { useState } from 'react';
import '../../styles/SignUpSection.css';

const SignupSection = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted email:', email);
  };

  return (
    <section className="signup-section">
      <div className="signup-container">
        <div className="signup-header">
          <h3>Sign up and try Hexnode free for 14 days!</h3>
        </div>
        <div className="signup-form-wrapper">
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-row">
              <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Your Work Email"
                value={email}
                onChange={handleEmailChange}
                className="email-input"
              />
              <button 
                type="submit" 
                className="submit-button"
              >
                Get Started
              </button>
            </div>
          </form>
        </div>
        <div className="signup-footer">
          <p className="footer-text">
            No credit cards required.
            <a 
              href="https://www.hexnode.com/mobile-device-management/request-demo/" 
              className="demo-link"
            >
              Request a demo
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;