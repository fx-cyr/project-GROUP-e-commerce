import React from "react";
import styled from "styled-components";

export const Homepage = () => {
  return (
    <HomePageWrapper>
      <SidebarWrapper>
        {/* TODO Add Sidebar component  */}Menu here
      </SidebarWrapper>
      <ItemDisplayGridWrapper>
        All the items here!
        {/* TODO Add ItemGrid component  */}
      </ItemDisplayGridWrapper>
      <CartWrapper>{/* TODO Add Cart component  */}Cart Here</CartWrapper>
    </HomePageWrapper>
  );
};

const HomePageWrapper = styled.div``;
const SidebarWrapper = styled.div``;
const ItemDisplayGridWrapper = styled.div``;
const CartWrapper = styled.div``;
