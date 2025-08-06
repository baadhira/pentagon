import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../styles/infiniteloop.css';
import costco from '../../assets/images/logoslider/costco.png'
import gorillas from '../../assets/images/logoslider/gorillas.png'
import groups from '../../assets/images/logoslider/groups.png'
import hilton from '../../assets/images/logoslider/hilton.png'
import marriot from '../../assets/images/logoslider/marriott-intl.png'
import merck from '../../assets/images/logoslider/merck.png'
import polaris from '../../assets/images/logoslider/polaris.png'
import saic from '../../assets/images/logoslider/saic.png'
import wolt from '../../assets/images/logoslider/wolt.png'
import lowes from '../../assets/images/logoslider/lowes.png'
const LogoSlider = () => {
  const logos = [
    { src: marriot, alt: 'Marriott' },
    { src: merck, alt: 'Merck' },
    { src: costco, alt: 'Costco' },
    { src: saic, alt: 'SAIC' },
    { src: hilton, alt: 'Hilton' },
    { src: groups, alt: 'Group 1 Automotive' },
    { src: lowes, alt: 'Lowe\'s' },
    { src: polaris, alt: 'Polaris' },
    { src: gorillas, alt: 'Gorillas' },
    { src: wolt, alt: 'Wolt' }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section style={{backgroundColor:'#F7F7F7',padding:'50px 0px'}}>
    <div className="containerLoop">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="sub-container">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="image-style" 
              />
          </div>
        ))}
      </Slider>
    </div>
    </section>
  );
};

export default LogoSlider;