import React from "react";
import styled from "styled-components";
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

        {category === "industrial" &&
          // TODO Add industrial Components
          "industrial Components "}

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
      <CartWrapper>{/* TODO Add Cart component  */}Cart Here</CartWrapper>
    </HomePageWrapper>
  );
};

const HomePageWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: (1fr, 2fr, 1fr);
  grid-template-areas: "sidebar main main cart";
`;

const SidebarWrapper = styled.div`
  grid-area: sidebar;
`;

const ItemDisplayGridWrapper = styled.div`
  grid-area: main;
`;

const CartWrapper = styled.div`
  grid-area: cart;
`;
