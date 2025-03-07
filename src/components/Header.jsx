// src/components/Header.jsx
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid #0074d9;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavBrand = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #0074d9;
  margin-left: 4rem;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 1rem;
  }
`;

const NavItem = styled(NavLink)`
  color: #0074d9;
  text-decoration: none;
  margin-left: 1.5rem;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border: 1px solid #0074d9;
  border-radius: 4px;
  transition: all 0.3s ease;
  background-color: #000; /* Preenchimento preto */

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

const Button = styled.button`
  color: white;
  background-color: transparent; /* Sem preenchimento */
  margin-left: 3rem;
  margin-right: 10rem;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border: 1px solid white;
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: white;
    color: #0074d9;
    box-shadow: 0 0 10px #0074d9, 0 0 20px #0074d9, 0 0 30px #0074d9;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const Header = ({ onAddVideoClick }) => (
  <NavBar>
    <NavBrand>BLUE-FLIX</NavBrand>
    <NavItems>
      <NavItem exact to="/" activeClassName="active">
        Home
      </NavItem>
      <Button onClick={onAddVideoClick}>
        <FaPlus />
        Novo Vídeo
      </Button>
    </NavItems>
  </NavBar>
);

export default Header;
