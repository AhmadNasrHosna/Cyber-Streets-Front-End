import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const MobileNavContainer = styled.aside`
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;

  &:hover {
    color: #002350;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const MobileNavWrapper = styled.div`
  color: #fff;
  z-index: 9998;
`;

export const MobileNavMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
  }
`;

export const MobileNavLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #002350;
    transition: 0.2s ease-in-out;
  }
`;

export const MobileBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const MobileDonate = styled(LinkR)`
  border-radius: 50px;
  background: #002350;
  white-space: no-wrap;
  padding: 1rem 4rem;
  font-size: 1.5rem;
  outline: none;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #020001;
  }
`;
