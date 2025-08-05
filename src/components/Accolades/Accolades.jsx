import React from "react";
import "../../styles/Accolades.css";
import IdcLogo from "../../assets/images/accolades/idc.png";
import Gartner from "../../assets/images/accolades/gartner.png";
import ForresterLogo from "../../assets/images/accolades/forrester.png";

const Accolades = () => {
  const accolades = [
    {
      href: "https://www.hexnode.com/blogs/mitsogo-hexnode-named-a-leader-in-idc-marketscape-worldwide-uem-software-for-apple-devices-2024-vendor-assessment/",
      imgSrc: IdcLogo,
      imgAlt: "IDC",
      description:
        "Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.",
    },
    {
      href: "https://www.hexnode.com/blogs/hexnode-listed-as-a-notable-vendor-in-gartner-midmarket-context-magic-quadranttm-for-unified-endpoint-management-tools/",
      imgSrc: Gartner,
      imgAlt: "Gartner",
      description:
        "Hexnode was recognized in the 2023 Gartner® Market Guide for Unified Endpoint Management Tools.",
    },
    {
      href: "https://www.hexnode.com/blogs/hexnode-included-in-the-unified-endpoint-management-landscape-report/",
      imgSrc: ForresterLogo,
      imgAlt: "Forrester",
      description:
        "Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.",
    },
  ];

  return (
    <div className="accolades-container">
      <div className="accolades-content">
        {accolades.map((item, index) => (
          <React.Fragment key={index}>
            <a
              className="accolade-item"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="accolade-details">
                <div className="accolade-image">
                  <img src={item.imgSrc} alt={item.imgAlt} />
                </div>
                <p className="accolade-description">{item.description}</p>
              </div>
            </a>
            {index < accolades.length - 1 && (
              <hr className="accolade-divider"/>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Accolades;