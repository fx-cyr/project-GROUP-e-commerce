import React from "react";
import styled from "styled-components";
import Cart from "./Cart";
import ItemGrid from "./ItemGrid";
import { Sidebar } from "./Sidebar";

export const Homepage = ({ category, setCategory }) => {
  return (
    <HomePageWrapper>
      <SidebarWrapper>
        <Sidebar setCategory={setCategory} />
      </SidebarWrapper>
      <ItemDisplayGridWrapper>
        {category === "all" &&
          // TODO Add All Items Components
          "All Items "}
        {category === "entertainement" &&
          // TODO Add entertainement Components
          "entertainement Components "}
        {category === "fitness" &&
          // TODO Add Fitness Components
          "Fitness Components "}
        {category === "gaming" &&
          // TODO Add gaming Components
          "gaming Components "}
        {category === "industrial" && (
          // TODO Add industrial Components
          <ItemGrid />
        )}
        {category === "lifestyle" &&
          // TODO Add lifestyle Components
          "lifestyle Components "}
        {category === "medical" &&
          // TODO Add medical Components
          "medical Components "}
        {category === "pets&animals" &&
          // TODO Add pets&animals Components
          "pets&animals Components "}
      </ItemDisplayGridWrapper>
      <CartWrapper>
        <Cart />
      </CartWrapper>
    </HomePageWrapper>
  );
};

const HomePageWrapper = styled.div`
  position: relative;
  display: flex;
`;

const SidebarWrapper = styled.div`
  width: 20%;
`;

const ItemDisplayGridWrapper = styled.div`
  width: 65%;
`;

const CartWrapper = styled.div`
  width: 15%;
`;
