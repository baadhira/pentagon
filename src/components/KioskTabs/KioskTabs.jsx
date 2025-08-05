import React, { useState, useEffect } from "react";
import "../../styles/KioskTabs.css";
import singleApp from "../../assets/images/kiosktabs/single-app-kiosk.png";
import multiApp from "../../assets/images/kiosktabs/multi-app-kiosk.png";
import webBased from "../../assets/images/kiosktabs/web-based-kiosk.png";
import digitalSign from "../../assets/images/kiosktabs/digital-signages.png";
import asam from "../../assets/images/kiosktabs/asam-kiosk.png";
import KioskFeatures from "./KioskFeatures";

const tabsData = {
  "Single App Kiosk": {
    title: "Powerful Single-App Kiosk solutions for enhanced control",
    features: [
      "Provision the devices to run one specialized application, with limited functionalities.",
      "Customize the device settings to cater to a specific use-case each time.",
      "Use Hexnode's Advanced Kiosk settings for additional restrictions or expanded device functionalities while in kiosk mode.",
      "Empower your administrators with full control over the kiosk devices.",
    ],
    image: singleApp,
  },
  "Multi-App Kiosk": {
    title: "Elevate efficiency with Multi-App Kiosk",
    features: [
      "Limit device access to approved apps, ensuring focus and productivity.",
      "With default phone and settings app inclusion, reduce distractions by providing users access to essential functions only.",
      "With Hexnode's peripheral settings admins can allow necessary device settings while retaining control.",
      "Simplify device management while empowering user productivity by deploying Multi-App Kiosk Mode.",
    ],
    image: multiApp,
  },
  "Web-based Kiosk": {
    title: "Web-based Kiosk Solutions",
    features: [
      "Manage your web-based kiosks effortlessly.",
      "Deploy tailored solutions for browser-based operations.",
      "Customize browser settings and restrictions.",
      "Ensure secure and focused web interactions.",
    ],
    image: webBased,
  },
  "Digital Signages": {
    title: "Dynamic Digital Signage Management",
    features: [
      "Create engaging digital display experiences.",
      "Centralize content management for signages.",
      "Customize display settings and layouts.",
      "Monitor and update signages remotely.",
    ],
    image: digitalSign,
  },
  "ASAM Kiosk": {
    title: "Advanced ASAM Kiosk Capabilities",
    features: [
      "Implement specialized ASAM kiosk modes.",
      "Enhance administrative and operational workflows.",
      "Customize access and functionality.",
      "Improve efficiency with targeted kiosk solutions.",
    ],
    image: asam,
  },
};

const KioskTabs = () => {
  const [selectedTab, setSelectedTab] = useState("Single App Kiosk");
  const [prevSelectedTab, setPrevSelectedTab] = useState(null);
  const [slideDirection, setSlideDirection] = useState(null);
  const [key, setKey] = useState(0);
  const tabKeys = Object.keys(tabsData);
  const activeIndex = tabKeys.indexOf(selectedTab);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    if (prevSelectedTab && prevSelectedTab !== selectedTab) {
      const currentIndex = Object.keys(tabsData).indexOf(selectedTab);
      const prevIndex = Object.keys(tabsData).indexOf(prevSelectedTab);
      setSlideDirection(
        currentIndex > prevIndex ? "slideInLeft" : "slideInRight"
      );
      setKey((prev) => prev + 1);
    }
    setPrevSelectedTab(selectedTab);
  }, [selectedTab, prevSelectedTab, slideDirection, key]);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {screenWidth < 700 ? (
        <KioskFeatures />
      ) : (
        <section className="section-container">
          <div className="containerTab">
            <p className="sectionTitleKiosk">
              Specific kiosk modes for unique use cases
            </p>
            <div className="tabs-wrapper">
              <div className="tabs-container">
                <ul className="tabs-list">
                  <div
                    className="tab-highlight"
                    style={{ "--active-index": activeIndex }}
                  >
                    {tabKeys.map((tab) => (
                      <li
                        key={tab}
                        className="tabItem"
                        onClick={() => setSelectedTab(tab)}
                      >
                        <p
                          className={`tab-text ${
                            selectedTab === tab ? "active" : ""
                          }`}
                        >
                          {tab}
                        </p>
                      </li>
                    ))}
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default KioskTabs;
