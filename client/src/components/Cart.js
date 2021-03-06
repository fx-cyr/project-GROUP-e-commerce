import React, { useState } from "react";
import styled from "styled-components";
import { colorsSet } from "../Global/Colors";
import CartItem from "./CartItem";
import { getStoreItemArray } from "../reducers/cartReducer";
import { useSelector } from "react-redux";
import { PurchaseModal } from "./PurchaseModal/PurchaseModal";

const Cart = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalPop = () => {
    setShowModal(true);
  };
  //Create an Array of items in the cart
  const storeItems = useSelector(getStoreItemArray);
  const [cartArr, setCartArr] = useState(storeItems);
  // console.log(storeItems);

  //Calculate the Cart total
  let total = 0;

  storeItems.forEach((item) => {
    let itemPrice = item.price.replace("$", "");
    total += itemPrice * item.quantity;
    return total;
  });
  total = total.toFixed(2);

  // console.log(storeItems);

  return (
    <>
      <Wrapper>
        <Title>Your Cart</Title>
        <NumOfItems>{storeItems.length} Item(s)</NumOfItems>
        {/* Mapping in the cart array to create cart items components */}
        {storeItems &&
          storeItems.map((item, index) => {
            return (
              <CartItem
                key={index}
                name={item.name}
                price={item.price.replace("$", "")}
                quantity={item.quantity}
                id={item._id}
                numInStock={item.numInStock}
              />
            );
          })}
        <TotalCostAndButton>
          <Total>
            Total: <strong>${total}</strong>
          </Total>
          {storeItems.length > 0 ? (
            <PurchaseBtn
              onClick={() => {
                handleModalPop();
                console.log(showModal);
              }}
            >
              Purchase
            </PurchaseBtn>
          ) : (
            <PurchaseBtn disabled>Purchase</PurchaseBtn>
          )}
        </TotalCostAndButton>
      </Wrapper>
      {showModal && (
        <PurchaseModal
          total={total}
          storeItems={storeItems}
          showModal={showModal}
          setShowModal={setShowModal}
          cartArr={cartArr}
          setCartArr={setCartArr}
        />
      )}
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e3e3e3;
  display: flex;
  position: sticky;
  flex-direction: column;
  color: black;
  min-height: 100%;
  overflow: hidden;
  padding: 15px;
  box-shadow: -12px -3px 28px -15px rgba(0, 0, 0, 0.25);
  border-left: 1px solid ${colorsSet.primary};
  align-items: center;
`;

const Title = styled.span`
  font-size: 24px;
`;

const NumOfItems = styled.span`
  margin-top: 10px;
  font-size: 1.1rem;
`;

const TotalCostAndButton = styled.div`
  background: white;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  bottom: 30px;
  box-shadow: 0px 8px 23px -2px rgba(16, 172, 132, 0.3);
  padding: 25px 15px 25px 15px;
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
  background-color: ${colorsSet.secondary};
  font-weight: 600;
  color: white;
  font-size: 1.2rem;
  border: none;
  height: 60px;
  max-width: 10vw;
  border-radius: 35px;
  padding: 10px 40px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${colorsSet.primaryHover};
  }
`;

export default Cart;
