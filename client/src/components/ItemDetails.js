import React from "react";
import styled from "styled-components";
import { colorsSet } from "../Global/Colors";

const ItemDetails = () => {
  return (
    <Wrapper>
      <ProductImg src="https://www.casio-intl.com/product/image/1425420508500/" />
      <ItemInfoWrapper>
        <div>
          <Brand>Brand</Brand>
          <ItemName>Item Name</ItemName>
        </div>
        <Cost>$49.99</Cost>
        <p>Quantity in stock: 9</p>
        <Form>
          <QtyInput>Quantity:</QtyInput>
          <Select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Select>
        </Form>
        <PurchaseButton>Buy Now!</PurchaseButton>
      </ItemInfoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 65px;
`;

const ProductImg = styled.img`
  height: 650px;
  width: auto;
  border-radius: 12px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const ItemInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 60px;
`;

const Brand = styled.h2`
  font-size: 1.8rem;
`;

const ItemName = styled.h1`
  font-size: 2.3rem;
`;

const Cost = styled.p`
  font-size: 1.8rem;
`;

const QtyInput = styled.div``;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const Select = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const PurchaseButton = styled.button`
  background-color: ${colorsSet.primary};
  color: white;
  font-size: 1.2rem;
  border: none;
  height: 60px;
  width: 230px;
  border-radius: 12px;
  padding: 10px 40px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${colorsSet.primaryHover};
  }
`;

export default ItemDetails;
