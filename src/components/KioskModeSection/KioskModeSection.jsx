import React, { useState } from "react";
import "../../styles/KioskModeSection.css";
import styled, { keyframes } from "styled-components";
import effortless from "../../assets/images/KioskModeSection/effortless.jpg";
import customized from "../../assets/images/KioskModeSection/customized-interface-image.jpg";
import datasecurity from "../../assets/images/KioskModeSection/power-up-protection-image.jpg";
import secureapp from "../../assets/images/KioskModeSection/secure-app-ecosystem.jpg";
import easytouse from "../../assets/images/KioskModeSection/easy-to-use-interface-image.jpg";
import greentick from "../../assets/images/KioskModeSection/ads-tick-green.svg";
const KioskModeSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("");
  const [contentKey, setContentKey] = useState(0);
  const [imageKey, setImageKey] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);

  const tabs = [
    {
      title: "Effortless kiosk deployment & management",
      content:
        "Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.",
      image: effortless,
      // overlay: "Brand visibility",
    },
    {
      title: "Customized interface for brand visibility",
      content:
        "Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.",
      image: customized,
      overlay: "Brand visibility",
    },
    {
      title: "What more can you do with Hexnode kiosk?",
      content:
        "Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features.",
      image: datasecurity,
      overlay: "Data security",
    },
    {
      title: "Secure and update your app ecosystem",
      content:
        "Streamline the deployment and management on apps on your kiosk devices. Save your time and effort, ensure security and improve your efficiency using Hexnode's silent app installation and update features.",
      image: secureapp,
      overlay: "App management",
    },
    {
      title: "Provide an easy-to-use interface for end-users",
      content:
        "Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free.",
      image: easytouse,
      overlay: "Easy to use interface",
    },
  ];

  const SlideInBottom = keyframes`
    from { 
      opacity: 0;
      transform: translateY(-100%); 
    }
    to { 
      opacity: 1;
      transform: translateY(0); 
    }
  `;

  const SlideInTop = keyframes`
    from { 
      opacity: 0;
      transform: translateY(100%); 
    }
    to { 
      opacity: 1;
      transform: translateY(0); 
    }
  `;

  const AnimatedContent = styled.div`
    animation: ${(props) =>
        props.animation === "slide-in-bottom" ? SlideInBottom : SlideInTop}
      0.3s ease forwards;
  `;

  const AnimatedImage = styled.div`
    animation: ${(props) =>
        props.animation === "slide-in-bottom" ? SlideInBottom : SlideInTop}
      0.3s ease forwards;
    width: 100%;
    object-fit: cover;
  `;

  const handleAccordionClick = (index) => {
    if (index !== activeTab) {
      setContentKey((prevKey) => prevKey + 1);
      setImageKey((prevKey) => prevKey + 1);

      if (prevIndex === null) {
        setAnimationDirection("slide-in-bottom");
      } else if (index > prevIndex) {
        setAnimationDirection("slide-in-bottom");
      } else if (index < prevIndex) {
        setAnimationDirection("slide-in-top");
      }

      setPrevIndex(index);
      setActiveTab(index);
    }
  };

  return (
    <section className="kiosk-mode-section">
      <div className="containerKiosk">
        <h2 className="section-title">
          What additional possibilities does the Kiosk mode offer?
        </h2>
        <div className="content-wrapper">
          <div className="image-column">
            <AnimatedImage
              key={`image-${imageKey}-${activeTab}`}
              animation={animationDirection}
            >
              <div className="image-slider">
                <img
                  src={tabs[activeTab].image}
                  alt={tabs[activeTab].title}
                  className="main-image"
                />
                {tabs[activeTab]?.overlay && (
                  <div className="image-overlay">
                    <p className="overlay-text">
                      <span className="overlay-icon">
                        <img src={greentick} alt="blue tick icon" />
                      </span>
                      {tabs[activeTab].overlay}
                    </p>
                  </div>
                )}
              </div>
            </AnimatedImage>
          </div>

          <div className="text-column">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`accordion-block ${
                  activeTab === index ? "active" : ""
                }`}
              >
                <div
                  className="mobile-image-wrapper"
                  onClick={() => handleAccordionClick(index)}
                >
                  {activeTab === index && (
                    <AnimatedImage
                      key={`mobile-image-${imageKey}-${index}`}
                      animation={animationDirection}
                    >
                      <div className="image-slider">
                        <img
                          src={tab.image}
                          alt={tab.title}
                          className="main-image"
                        />
                        {tab?.overlay && (
                          <div className="image-overlay">
                            <p className="overlay-text">
                              <span className="overlay-icon">
                                <img src={greentick} alt="blue tick icon" />
                              </span>
                              {tab.overlay}
                            </p>
                          </div>
                        )}
                      </div>
                    </AnimatedImage>
                  )}
                </div>

                <div
                  className="tab-item"
                  onClick={() => handleAccordionClick(index)}
                >
                  <h3 className="tab-title">{tab.title}</h3>

                  {activeTab === index && (
                    <div className="tab-content">
                      <AnimatedContent
                        key={`content-${contentKey}-${index}`}
                        animation={animationDirection}
                        className="accordion-body"
                      >
                        <p>{tab.content}</p>
                        <a
                          href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
                          className="try-free-link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Try for free
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="6.575"
                            height="11.737"
                            className="arrow-icon"
                          >
                            <path
                              fill="none"
                              stroke="#dd0735"
                              strokeLinecap="round"
                              d="m.707.707 5.161 5.161-5.161 5.161"
                            />
                          </svg>
                        </a>
                      </AnimatedContent>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KioskModeSection;
