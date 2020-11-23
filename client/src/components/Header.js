import React from "react";
import styled from "styled-components";
import { TiWatch } from "react-icons/ti";
import { colorsSet } from "../Global/Colors";
import { NavLink } from "react-router-dom";

export const Header = ({ category }) => {
  return (
    <HeaderWrapper>
      <LeftHeaderContainer>
        <div>
          <TiWatch />
        </div>
        <div>
          <CompanyName>DasWatches</CompanyName>
        </div>
      </LeftHeaderContainer>
      <RightNavBar>
        <StyledUL>
          <StyledLI>
            <StyledNavLink
              to={`/home/${category}`}
              aria-label="Link to Home Page"
            >
              Home
            </StyledNavLink>
          </StyledLI>
          <StyledLI>
            <StyledNavLink exact to="/about" aria-label="Link to About Page">
              About us
            </StyledNavLink>
          </StyledLI>
          <StyledLI>
            <StyledNavLink
              exact
              to="/partners"
              aria-label="Link to our Partners Page"
            >
              Our Partners
            </StyledNavLink>
          </StyledLI>
        </StyledUL>
      </RightNavBar>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${colorsSet.primary};
  color: white;
  position: relative;
  display: flex;
`;

const LeftHeaderContainer = styled.div`
  font-size: 3rem;
  display: flex;
  align-items: center;
  top: 10px;
  margin-left: 8%;
`;

const CompanyName = styled.p`
  font-style: italic;
`;

const RightNavBar = styled.nav`
  position: absolute;
  right: 5%;
  top: 20px;
  font-size: 1.7rem;
  display: flex;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin-right: 40px;
  font-style: italic;

  &:hover {
  }

  &.active {
    text-decoration: underline;
  }
`;

const StyledUL = styled.ul`
  list-style: none;
  display: flex;
`;
const StyledLI = styled.li`
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    font-weight: bolder;
    color: black;
  }
`;
