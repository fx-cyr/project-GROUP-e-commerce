import React from "react";
import styled from "styled-components";
import Cart from "./Cart";
import Sidebar from "./Sidebar";

export const Homepage = () => {
  return (
    <HomePageWrapper>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <ItemDisplayGridWrapper>
        All the items here!
        {/* TODO Add ItemGrid component  */}
      </ItemDisplayGridWrapper>
      <CartWrapper>
        <Cart />
      </CartWrapper>
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
