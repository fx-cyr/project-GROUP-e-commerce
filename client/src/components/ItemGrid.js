import React from "react";
import styled from "styled-components";
import Item from "./Item";

const ItemGrid = () => {
  return (
    <Wrapper>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 24px;
`;

export default ItemGrid;
