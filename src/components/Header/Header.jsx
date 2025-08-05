import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../../styles/HeaderKiosk.css";


const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    background-color: ${({ scrolled }) => (scrolled ? "red" : "white")};
    color: ${({ scrolled }) => (scrolled ? "#050c1b" : "white")};
    border-radius: 5px;
    transition: transform 0.3s ease-in-out;
  }

  @media (max-width: 1280px) {
    display: flex;
  }
`;
const HeaderContainer = styled.header`
  background: ${({ scrolled }) => (scrolled ? "white" : "#050c1b")};
  color: ${({ scrolled }) => (scrolled ? "#050c1b" : "white")};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  transition: background 0.3s ease, color 0.3s ease;
  z-index: 100;
  box-shadow: ${({ scrolled }) =>
    scrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none"};
  &:hover {
    background: white;
    color: black;
  }
    
    ${Hamburger} div {
      background-color: ${({ scrolled }) => (scrolled ? "#050c1b" : "white")};
    }
`;

const BlurOverlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 999;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;



const FullScreenMenu = styled.div`
  display: none;
  @media (max-width: 1280px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: #fff;
    color: white;
    display: flex;
    flex-direction: column;
    z-index: 1000;
    transition: transform 0.3s ease;
    transform: translateX(${({ isOpen }) => (isOpen ? "0" : "100%")});
  }
  @media (max-width: 650px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    color: white;
    display: flex;
    flex-direction: column;
    z-index: 1000;
    transition: transform 0.3s ease;
    transform: translateX(${({ isOpen }) => (isOpen ? "0" : "100%")});
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: black;
  font-size: 2rem;
  cursor: pointer;
  transition: transform 0.2s ease;
`;

const MenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  gap: 1rem;
  width: 100%;

  a {
    color: black;
    font-size: 1.5rem;
    text-decoration: none;
    margin-bottom: 1rem;
    text-align: center;

    &.trial-button {
      color: blue; 
    }

    &.login-title {
      color: black;
    }
  }
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 1.5rem;

  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
  }

  @media (max-width: 1280px) {
    display: none;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } 
    else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <HeaderContainer scrolled={scrolled}>
        <Logo>hexnode</Logo>

        <NavMenu>
          <a
            href=""
            className="trial-button"
            target="_self"
            rel="nofollow"
            aria-label="14 Day Free Trial"
          >
            14 Day Free Trial
          </a>
        </NavMenu>

        <Hamburger onClick={toggleMenu}>
          <div
            style={{ transform: isMenuOpen ? "rotate(45deg)" : "rotate(0)" }}
          />
          <div
            style={{
              opacity: isMenuOpen ? "0" : "1",
              transform: isMenuOpen ? "translateX(-20px)" : "translateX(0)",
            }}
          />
          <div
            style={{ transform: isMenuOpen ? "rotate(-45deg)" : "rotate(0)" }}
          />
        </Hamburger>

        <BlurOverlay isOpen={isMenuOpen} onClick={toggleMenu} />

        <FullScreenMenu isOpen={isMenuOpen}>
          <CloseButton onClick={toggleMenu}>&times;</CloseButton>
          <MenuLinks>
            <a
              href=""
              className="trial-button"
              target="_self"
              rel="nofollow"
              aria-label="14 Day Free Trial"
            >
              14 Day Free Trial
            </a>
            <a className="login-title" onClick={toggleMenu}>
              Login
            </a>
          </MenuLinks>
        </FullScreenMenu>
      </HeaderContainer>
    </>
  );
};

export default Header;
