import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Item from "./Item";

const ItemGrid = () => {
  //FIRST GO AT IMPORTING DATA

  // const [allProducts, setAllProducts] = useState([]);

  // useEffect(() => {
  //   fetch("/api/items")
  //     .then((res) => {
  //       console.log(res);
  //       return res.json();
  //     })
  //     .then((json) => {
  //       setAllProducts(json.items);
  //     })
  //     .catch((error) => {
  //       console.log("error");
  //     });
  // }, []);
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
