import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import ItemGrid from "./ItemGrid";

export const Homepage = () => {
  return (
    <HomePageWrapper>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <ItemDisplayGridWrapper>
        All the items here!
        <ItemGrid />
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
