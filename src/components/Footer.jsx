import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: CENTER;
  align-items: center;
  background-color: #000;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 1000;
  border-top: 1px solid #0074d9;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterBrand = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #0074d9;
`;

const FooterItems = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 1rem;
  }
`;

const FooterItem = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin-left: 1.5rem;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border: 1px solid white;
  border-radius: 4px;
  transition: all 0.3s ease;

  &.active {
    background-color: #0074d9;
    color: white;
    border: 1px solid #0074d9;
    box-shadow: 0 0 10px #0074d9, 0 0 20px #0074d9, 0 0 30px #0074d9;
  }

  &:hover {
    background-color: #0074d9;
    color: white;
    border: 1px solid #0074d9;
    box-shadow: 0 0 10px #0074d9, 0 0 20px #0074d9, 0 0 30px #0074d9;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const FooterButton = styled.button`
  color: white;
  background-color: #0074d9;
  margin-left: 3rem;
  margin-right: 10rem;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border: 1px solid white;
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
    box-shadow: 0 0 10px #0074d9, 0 0 20px #0074d9, 0 0 30px #0074d9;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const Footer = ({ onAddVideoClick }) => (
  <FooterContainer>
    <FooterBrand>BLUE-FLIX</FooterBrand>
    <FooterItems></FooterItems>
  </FooterContainer>
);

export default Footer;
