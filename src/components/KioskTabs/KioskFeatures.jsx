import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import '../../styles/KioskFeatures.css';
import singleApp from '../../assets/images/kiosktabs/single-app-kiosk.png';
import multiApp from '../../assets/images/kiosktabs/multi-app-kiosk.png';
import webBased from '../../assets/images/kiosktabs/web-based-kiosk.png';
import digitalSign from '../../assets/images/kiosktabs/digital-signages.png';
import asam from '../../assets/images/kiosktabs/asam-kiosk.png';

const KioskFeatures = () => {
  const [activeSection, setActiveSection] = useState(null);

   const features = [
    {
      id: 'single-app',
      title: 'Single App Kiosk',
      heading: 'Powerful Single-App Kiosk solutions for enhanced control',
      points: [
        'Provision the devices to run one specialized application, with limited functionalities.',
        'Customize the device settings to cater to a specific use-case each time.',
        'Use Hexnodes Advanced Kiosk settings for additional restrictions or expanded device functionalities while in kiosk mode.',
        'Empower your administrators with full control over the kiosk devices.'
      ],
      image: singleApp
    },
    {
      id: 'multi-app',
      title: 'Multi-App Kiosk',
      heading: 'Elevate efficiency with Multi-App Kiosk',
      points: [
        'Limit device access to approved apps, ensuring focus and productivity.',
        'With default phone and settings app inclusion, reduce distractions by providing users access to essential functions only.',
        'With Hexnodes peripheral settings admins can allow necessary device settings while retaining control.',
        'Simplify device management while empowering user productivity by deploying Multi-App Kiosk Mode.'
      ],
      image: multiApp
    },
    {
      id: 'web-based',
      title: 'Web-based Kiosk',
      heading: 'Explore the new way to manage web apps and websites',
      points: [
        'Let users access essential and approved web apps, website and files only.',
        'Make the best use of website kiosk with Hexnodes advanced settings.',
        'Tailor your experience to match your unique use case.',
        'From configuring toolbar options to scheduling page refresh, remote debugging, and limiting incognito tabs, take full control of your website kiosk experience.'
      ],
      image: webBased
    },
    {
      id: 'digital-signage',
      title: 'Digital Signages',
      heading: 'Capture attention with Digital Signage Kiosks',
      points: [
        'Transform your devices into captivating digital signage kiosks that grab attention.',
        'Engage your audience with vibrant images and seamless video streaming.',
        'Customize media files with trimming, muting, and background music.',
        'Advertise and show off your brand aesthetics to attract customers in different ways.',
        'Take control with Hexnode to reestablish your brands presence.'
      ],
      image: digitalSign
    },
    {
      id: 'asam',
      title: 'ASAM Kiosk',
      heading: 'Unlock the power of Autonomous Single App Mode (ASAM)',
      points: [
        'A feature that empowers your iOS app to seamlessly secure itself in the foreground.',
        'Transform tablets or devices into dedicated point-of-sale (POS) systems by preventing interruptions from other applications or notifications.',
        'Create focused, efficient and secure digital environments to match your requirements.',
        'Configure ASAM effortlessly and elevate your user experience like never before.'
      ],
      image: asam
    }
  ];

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  const CheckmarkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" className="checkmark-icon">
      <path fill="none" stroke="#60c458" strokeWidth="2" d="M1 4l4 4 8-8" />
    </svg>
  );

  return (
    <section className='section-kiosk-feature'>
        <h2 className="sectionTitle">
          Specific kiosk modes for unique use cases
        </h2>
    <div className="kiosk-features">
      {features.map((feature) => (
        <div key={feature.id} className="feature-section">
          <div 
        //   className="feature-header"
                className={`feature-header ${activeSection === feature.id ? 'active' : ''}`}
           onClick={() => toggleSection(feature.id)}>
            <div className="feature-header-content">
              <span className="feature-title">{feature.title}</span>
              <ChevronDown
                className={`chevron-icon ${activeSection === feature.id ? 'active' : ''}`}
                size={20}
              />
            </div>
          </div>

          <div
            className={`feature-content ${activeSection === feature.id ? 'active' : ''}`}
            style={{
              transformOrigin: activeSection === feature.id ? 'bottom' : 'top', 
            }}
          >
            <div className="feature-body">
              <div className="feature-text">
                <h3 className="feature-heading">{feature.heading}</h3>
                <ul className="feature-list">
                  {feature.points.map((point, index) => (
                    <li key={index} className="feature-list-item">
                      <CheckmarkIcon />
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="feature-image">
                <img
                  src={feature.image}
                  alt={feature.title}
                  width={570}
                  height={387}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default KioskFeatures;
