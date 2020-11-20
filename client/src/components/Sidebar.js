import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FiHome, FiUser, FiBell, FiBookmark } from "react-icons/fi";
import { IoIosFitness, IoIosPaw } from "react-icons/io";
import { MdFiberSmartRecord } from "react-icons/md";
import { CgGames } from "react-icons/cg";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { FaWalking } from "react-icons/fa";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { colorsSet } from "../Global/Colors";

export const Sidebar = ({ setCategory }) => {
  return (
    <SidebarWrapper>
      <SubNav>
        <UnorderedList>
          <ListItems>
            <NavigationLink
              onClick={() => {
                setCategory("all");
              }}
              to="/home/all"
            >
              <Bold>All Category</Bold>
            </NavigationLink>
          </ListItems>
          <ListItems>
            <NavigationLink
              onClick={() => {
                setCategory("entertainement");
              }}
              to="/home/entertainement"
            >
              {" "}
              <MdFiberSmartRecord />
              <Bold>entertainement</Bold>
            </NavigationLink>
          </ListItems>
          <ListItems>
            <NavigationLink
              onClick={() => {
                setCategory("fitness");
              }}
              to="/home/fitness"
            >
              <IoIosFitness />
              <Bold>Fitness</Bold>
            </NavigationLink>
          </ListItems>
          <ListItems>
            <NavigationLink
              onClick={() => {
                setCategory("gaming");
              }}
              to="/home/gaming"
            >
              <CgGames /> <Bold>gaming</Bold>
            </NavigationLink>
          </ListItems>
          <ListItems>
            <NavigationLink
              onClick={() => {
                setCategory("industrial");
              }}
              to="/home/industrial"
            >
              {" "}
              <HiOutlineColorSwatch />
              <Bold>industrial</Bold>
            </NavigationLink>
          </ListItems>
          <ListItems>
            <NavigationLink
              onClick={() => {
                setCategory("lifestyle");
              }}
              to="/home/lifestyle"
            >
              {" "}
              <FaWalking />
              <Bold>lifestyle</Bold>
            </NavigationLink>
          </ListItems>
          <ListItems>
            <NavigationLink
              onClick={() => {
                setCategory("medical");
              }}
              to="/home/medical"
            >
              {" "}
              <AiOutlineMedicineBox />
              <Bold>medical</Bold>
            </NavigationLink>
          </ListItems>
          <ListItems>
            <NavigationLink
              onClick={() => {
                setCategory("pets&animals");
              }}
              to="/home/pets&animals"
            >
              {" "}
              <IoIosPaw />
              <Bold>pets&animals</Bold>
            </NavigationLink>
          </ListItems>
        </UnorderedList>
      </SubNav>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-top: 10px;
`;



const Bold = styled.span`
  font-weight: bold;
  margin-left: 15px;
  margin-right: 15px;
`;

const Bold = styled.span`
  font-weight: bold;
  margin-left: 15px;
`;


const NavigationLink = styled(NavLink)`
  width: 50%;
  color: black;
  padding: 10px;

  text-decoration: none;

  border-radius: 20px;
  &:hover {
    background-color: ${colorsSet.primaryHover};
  }
  &.active {
    color: ${colorsSet.primary};
  }
`;

const UnorderedList = styled.ul`
  list-style: none;
`;

const ListItems = styled.li`
  height: 70px;
  font-size: 1.5rem;
`;


const SubNav = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

