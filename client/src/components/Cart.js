import React from "react";
import styled from "styled-components";
import { colorsSet } from "../Global/Colors";
import CartItem from "./CartItem";

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
  background: #e9f8fa;
  display: flex;
  position: sticky;
  flex-direction: column;
  color: black;
  min-height: 100vh;
  overflow: hidden;
  padding: 15px;
  border-left: 2px solid ${colorsSet.primary};
  align-items: center;
`;

const Title = styled.span`
  font-size: 24px;
`;

const NumOfItems = styled.span`
  margin-top: 10px;
`;

const TotalCostAndButton = styled.div`
  width: 9vw;
  height: 10vh;
  background: white;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  bottom: 30px;
  box-shadow: 0px 8px 23px -2px rgba(22, 98, 108, 0.3);
  padding: 25px;
  border-radius: 12px;
  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Total = styled.p`
  font-size: 1.2em;
  margin-bottom: 12px;
`;

const PurchaseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colorsSet.primary};
  color: white;
  font-size: 1.2rem;
  border: none;
  height: 60px;
  max-width: 10vw;
  border-radius: 12px;
  padding: 10px 40px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${colorsSet.primaryHover};
  }
`;

export default Cart;
