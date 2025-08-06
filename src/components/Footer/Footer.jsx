import React from 'react';
import '../../styles/Footer.css'; 


const Footer = () => {
  const legalLinks = [
    { 
      text: 'Terms of Use', 
      url: 'https://www.hexnode.com/legal/terms-of-use/' 
    },
    { 
      text: 'Privacy', 
      url: 'https://www.hexnode.com/legal/privacy-policy/' 
    },
    { 
      text: 'Cookies', 
      url: 'https://www.hexnode.com/legal/cookies-policy/' 
    }
  ];

  return (
    <footer className="site-footer">
      <nav className="footer-nav">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-links-container">
              <div className="legal-links-wrapper">
                <ul className="legal-links">
                  {legalLinks.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.url} 
                        className="legal-link"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="copyright">
              <p>Copyright © 2024 Mitsogo Inc. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
