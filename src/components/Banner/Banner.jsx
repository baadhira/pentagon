import React from "react";
import styled from "styled-components";
import bannerImage from "../../assets/images/banner/banner.png";

const BannerContainer = styled.section`
  background-color: #020a19;
  color: white;
  padding: 1.5rem 5%; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 916px) {
    flex-direction: column; 
    text-align: center;
    padding: 2rem 3%; 
  }
     @media (max-width: 1280px) {
    flex-direction: column; 
    text-align: center;
    padding: 2rem 3%; 
  }
`;

const BannerImage = styled.img`
  max-width: 58%; 
  height: auto;
  order: 2; 

  @media (max-width: 916px) {
    max-width: 80%;
    margin-bottom: 1.5rem;
    order: 1; 
  }
      @media (max-width: 1280px) {
    max-width: 80%;
    margin-bottom: 1.5rem;
    order: 1; 
  }
`;

const BannerContent = styled.div`
  max-width: 50%; 
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  order: 1; 

  @media (max-width: 916px) {
    max-width: 100%; 
    order: 2; 
  }
     @media (max-width: 1280px) {
    max-width: 100%; 
    order: 2; 
  }
`;

const BannerText = styled.h1`
  font-size: 2rem;
  line-height: 1.5;
  margin: 0;
 @media (min-width: 1266px) {
    font-size: 2.3rem;
  }
  @media (max-width: 916px) {
    font-size: 1.8rem;
  }
    @media (max-width: 625px) {
    br {
      display: none;
    }
  }
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 916px) {
    // flex-direction: column; 
    // gap: 1rem;
    // align-items: center;
  }
  @media (max-width: 625px) {
    flex-direction: column; 
    gap: 1rem;
    align-items: center;
  }
`;

const EmailInput = styled.input`
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  background: white;
  color: #333;
  flex: 1;
  max-width: 300px;

  &:focus {
    outline: none
  }

  @media (max-width: 623px) {
    width: 50%; 
    max-width: 100%;
  }
      @media (max-width: 380px) {
    width: 85%; 
    max-width: 100%;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #dd0735;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
  flex: 1;
  max-width: 300px;

  &:hover {
    background-color: #b9062b;
  }
 @media (max-width: 916px) {
    max-width: 300px;
  }
  @media (max-width: 623px) {
    width: 57%; 
    max-width: 100%;
  }
     @media (max-width: 380px) {
    width: 95%; 
    max-width: 100%;
  }
`;

const Banner = () => {
  return (
    <BannerContainer>
      <BannerImage
        src={bannerImage} 
        alt="Hexnode UEM"
      />

      <BannerContent>
        <BannerText>
          Turn your devices into 
          <br />
          kiosks in a few minutes
          <br />
          with Hexnode UEM
        </BannerText>
        <FormGroup>
          <EmailInput type="email" placeholder="Your work email" />
          <Button>GET STARTED NOW!</Button>
        </FormGroup>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
