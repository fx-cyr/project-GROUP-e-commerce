import React from "react";
import styled from "styled-components";
import { colorsSet } from "../Global/Colors";

const Cart = () => {
  return (
    <Wrapper>
      <h1>Your Cart</h1>
      <NumOfItems>1 Item</NumOfItems>
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
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 10;
  width: 14vw;
  height: 100vh;
  background: white;
  border-right: 1.5px solid ${colorsSet.primary};
  color: black;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const CartItem = styled.div``;

const NumOfItems = styled.span``;

const TotalCostAndButton = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 20px;
  width: 88%;
`;

const Total = styled.p``;

const PurchaseBtn = styled.button`
  background-color: ${colorsSet.primary};
  color: white;
  border: none;
  height: 40px;
  width: 80px;
  border-radius: 12px;
  padding: 0px 0px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${colorsSet.primaryHover};
  }
`;

export default Cart;
