import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiHome, FiUser, FiBell, FiBookmark } from "react-icons/fi";
import { IoIosFitness, IoIosPaw } from "react-icons/io";
import { MdFiberSmartRecord } from "react-icons/md";
import { CgGames } from "react-icons/cg";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { FaWalking } from "react-icons/fa";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { colorsSet } from "../Global/Colors";

const Sidebar = () => {
  return (
    <Wrapper>
      <Navigation>
        <NavigationLink exact to={"/"}>
          <Bold>All Products</Bold>
        </NavigationLink>
        <SubNav>
          <NavigationLink to={"/items/category/entertainment"}>
            <MdFiberSmartRecord />
            <Bold>Entertainment</Bold>
          </NavigationLink>
          <NavigationLink to={"/items/category/fitness"}>
            <IoIosFitness />
            <Bold>Fitness</Bold>
          </NavigationLink>
          <NavigationLink to={"/items/category/gaming"}>
            <CgGames />
            <Bold>Gaming</Bold>
          </NavigationLink>
          <NavigationLink to={"/items/category/industrial"}>
            <HiOutlineColorSwatch />
            <Bold>Industrial</Bold>
          </NavigationLink>
          <NavigationLink to={"/items/category/lifestyle"}>
            <FaWalking />
            <Bold>Lifestyle</Bold>
          </NavigationLink>
          <NavigationLink to={"/items/category/medical"}>
            <AiOutlineMedicineBox />
            <Bold>Medical</Bold>
          </NavigationLink>
          <NavigationLink to={"/items/category/pets"}>
            <IoIosPaw />
            <Bold>Pets & Animals</Bold>
          </NavigationLink>
        </SubNav>
      </Navigation>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 10px;
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-top: 10px;
`;

const Bold = styled.span`
  font-weight: bold;
  margin-left: 15px;
`;

const NavigationLink = styled(NavLink)`
  width: 50%;
  color: black;
  padding: 10px;
  border-radius: 20px;
  &:hover {
    background-color: ${colorsSet.primaryHover};
  }
  &.active {
    color: ${colorsSet.primary};
  }
`;

const SubNav = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
export default Sidebar;
