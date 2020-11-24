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
          <ItemView>Shop by Category</ItemView>
          <ListItems>
            <NavigationLink
              onClick={() => {
                setCategory("all");
              }}
              to="/home/all"
            >
              <Main>View all products</Main>
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
              <Bold>Entertainement</Bold>
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
              <CgGames /> <Bold>Gaming</Bold>
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
              <Bold>Industrial</Bold>
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
              <Bold>Lifestyle</Bold>
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
              <Bold>Medical</Bold>
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
              <Bold>Pets & Animals</Bold>
            </NavigationLink>
          </ListItems>
        </UnorderedList>
        <Divider />
        <UnorderedList>
          <ItemView>Shop by Body Location</ItemView>
          <ListItems>
            <NavigationLink
              onClick={() => {
                setCategory("all");
              }}
              to="/home/all"
            >
              <Main>View all products</Main>
            </NavigationLink>
          </ListItems>
          <ListItems>
            <NavigationLink
              onClick={() => {
                setCategory("arms");
              }}
              to="/home/arms"
            >
              {" "}
              <Bold>Arms</Bold>
            </NavigationLink>
          </ListItems>
          <ListItems>
            <NavigationLink
              onClick={() => {
                setCategory("chest");
              }}
              to="/home/chest"
            >
              <Bold>Chest</Bold>
            </NavigationLink>
          </ListItems>
          <ListItems>
            <NavigationLink
              onClick={() => {
                setCategory("feet");
              }}
              to="/home/feet"
            >
              <Bold>Feet</Bold>
            </NavigationLink>
          </ListItems>
          <ListItems>
            <NavigationLink
              onClick={() => {
                setCategory("hands");
              }}
              to="/home/hands"
            >
              {" "}
              <Bold>Hands</Bold>
            </NavigationLink>
          </ListItems>
          <ListItems>
            <NavigationLink
              onClick={() => {
                setCategory("head");
              }}
              to="/home/head"
            >
              {" "}
              <Bold>Head</Bold>
            </NavigationLink>
          </ListItems>
          <ListItems>
            <NavigationLink
              onClick={() => {
                setCategory("neck");
              }}
              to="/home/neck"
            >
              {" "}
              <Bold>Neck</Bold>
            </NavigationLink>
          </ListItems>
          <ListItems>
            <NavigationLink
              onClick={() => {
                setCategory("torso");
              }}
              to="/home/torso"
            >
              {" "}
              <Bold>Torso</Bold>
            </NavigationLink>
          </ListItems>
          <ListItems>
            <NavigationLink
              onClick={() => {
                setCategory("waist");
              }}
              to="/home/waist"
            >
              {" "}
              <Bold>Waist</Bold>
            </NavigationLink>
          </ListItems>
          <ListItems>
            <NavigationLink
              onClick={() => {
                setCategory("wrist");
              }}
              to="/home/wrist"
            >
              {" "}
              <Bold>Wrist</Bold>
            </NavigationLink>
          </ListItems>
        </UnorderedList>
      </SubNav>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.nav`
  margin-right: 0;
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

const Main = styled.span`
  font-weight: bold;
  margin-right: 15px;
`;

const NavigationLink = styled(NavLink)`
  font-size: 14px;
  color: black;
  padding: 5px 10px;

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
  padding: 10px;
  font-size: 18px;
`;

const SubNav = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const ItemView = styled.div`
  font-size: 18px;
  color: black;
  padding: 5px 10px;
`;

const Divider = styled.div`
  text-align: center;
  border: 1px dashed lightgrey;
  margin: 20px 10px;
  width: 50%;
`;
