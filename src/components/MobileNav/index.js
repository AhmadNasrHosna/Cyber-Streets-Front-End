import React from "react";
import {
  MobileNavContainer,
  Icon,
  CloseIcon,
  MobileNavWrapper,
  MobileNavLink,
  //MobileBtnWrap,
  //MobileDonate,
  MobileNavMenu,
} from "./MobileNavElements";

const MobileNav = ({ isOpen, toggle }) => {
  return (
    <MobileNavContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <MobileNavWrapper>
        <MobileNavMenu>
          <MobileNavLink
            onClick={toggle}
            to="features"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            About
          </MobileNavLink>
          <MobileNavLink
            onClick={toggle}
            to="resource"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Resources
          </MobileNavLink>
          <MobileNavLink
            onClick={toggle}
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Contact
          </MobileNavLink>
        </MobileNavMenu>
        {/* <MobileBtnWrap>
          <MobileDonate to="/donate">Donate</MobileDonate>
        </MobileBtnWrap> */}
      </MobileNavWrapper>
    </MobileNavContainer>
  );
};

export default MobileNav;
