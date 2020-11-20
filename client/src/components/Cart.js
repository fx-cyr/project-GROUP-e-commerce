import React from "react";
import styled from "styled-components";
import { colorsSet } from "../Global/Colors";

const Cart = () => {
  return (
    <Wrapper>
      <Title>Your Cart</Title>
      <NumOfItems>0 Item(s)</NumOfItems>
      <CartItem />
      <TotalCostAndButton>
        <Total>
          Total: <strong>$0.00</strong>
        </Total>
        <PurchaseBtn>Purchase</PurchaseBtn>
      </TotalCostAndButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: black;
  top: 0;
  min-height: 100vh;
  padding: 15px 20px;
  border-left: 2px dashed ${colorsSet.primary};
`;

const Title = styled.span`
  font-size: 24px;
`;

const CartItem = styled.div``;

const NumOfItems = styled.span`
  margin-top: 10px;
`;

const TotalCostAndButton = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 20px;
  width: 88%;
`;

const Total = styled.p`
  font-size: 1.2em;
`;

const PurchaseBtn = styled.button`
  background-color: ${colorsSet.primary};
  color: white;
  font-size: 1.2rem;
  border: none;
  height: 60px;
  width: 160px;
  border-radius: 12px;
  padding: 10px 40px;
  box-shadow: 0px 8px 23px -2px rgba(22, 98, 108, 0.48);
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${colorsSet.primaryHover};
  }
`;

export default Cart;
