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
              <MdFiberSmartRecord style={{ marginRight: "10px" }} />
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
              <IoIosFitness style={{ marginRight: "10px" }} />
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
              <CgGames style={{ marginRight: "10px" }} /> <Bold>Gaming</Bold>
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
              <HiOutlineColorSwatch style={{ marginRight: "10px" }} />
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
              <FaWalking style={{ marginRight: "10px" }} />
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
              <AiOutlineMedicineBox style={{ marginRight: "10px" }} />
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
              <IoIosPaw style={{ marginRight: "10px" }} />
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
  margin-right: 15px;
`;

const Main = styled.span`
  font-weight: bold;
  margin-right: 15px;
`;

const NavigationLink = styled(NavLink)`
  font-size: 14px;
  color: black;
  margin: 5px 0;
  text-decoration: none;
  border-radius: 15px;

  &::after {
    content: "";
    display: block;
    width: 0;
    border-top: 2px solid black;
    background: #000;
    transition: width 0.2s;
  }

  &:hover::after {
    width: 20%;
  }

  &.active {
    color: ${colorsSet.secondary};
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
