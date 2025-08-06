import React from 'react';
import '../styles/PlatformsSection.css';
import androidLogo from '../assets/images/android.png';
import windowsLogo from '../assets/images/windows.png';
import iosLogo from '../assets/images/ios.png';
import androidTvLogo from '../assets/images/android-tv.png';
import appleTvLogo from '../assets/images/apple-tv.png';
import amazonFireLogo from '../assets/images/fire.png';

const PlatformsSection = () => {
  const platforms = [
    { name: 'Android', logo: androidLogo },
    { name: 'Windows', logo: windowsLogo },
    { name: 'iOS', logo: iosLogo },
    { name: 'Android TV', logo: androidTvLogo },
    { name: 'Apple TV', logo: appleTvLogo },
    { name: 'Amazon Fire', logo: amazonFireLogo }
  ];

  return (
    <section className="platforms-section">
      <div className="platforms-container">
        <h2 className="platforms-title">Platforms supported</h2>
        <div className="platforms-grid">
          {platforms.map((platform, index) => (
            <div key={index} className="platform-item">
              <div className="platform-logo-container">
                <img 
                  src={platform.logo} 
                  alt={platform.name} 
                  className="platform-logo"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;


