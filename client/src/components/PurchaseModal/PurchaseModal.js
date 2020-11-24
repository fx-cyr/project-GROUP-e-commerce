import React, { useState } from "react";
import styled from "styled-components";
import { colorSet } from "../../Global/Colors";
import { useHistory } from "react-router";
import { PurchaseConfirmation } from "../PurchaseConfirmation";
// import {
//   handleNameChangeValue,
//   handleEmailChangeValue,
//   handleAddressChangeValue,
//   handleCCNumChangeValue,
//   handleCCNameChangeValue,
//   handleExpiryDateChangeValue,
// } from "./handlers";

export const PurchaseModal = ({ storeItems, total }) => {
  const [fullName, setFullName] = useState("");
  const [emailAdress, setEmailAdress] = useState("");
  const [streetAdress, setStreetAdress] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [ccName, setCCName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [confirmation, setConfirmation] = useState(false);

  const history = useHistory();
  const handleExitCart = () => {
    history.push("/");
  };

  const handleChange = (state, ev) => {
    state(ev.target.value);
  };

  const handleConfirmation = () => {
    setConfirmation(true);
  };

  let checkIsValid = (ev) => {
    ev.preventDefault();

    if (!fullName) {
      return window.alert("Missing name");
    } else if (!emailAdress) {
      return window.alert("Missing email address");
    } else if (!streetAdress) {
      return window.alert("Missing delivery address");
    } else if (!creditCard) {
      return;
      window.alert("Missing credit card number");
    } else if (!ccName) {
      return window.alert("Missing credit card name holder");
    } else if (!expiryDate) {
      return window.alert("Missing credit card expiry date");
    } else {
      handleConfirmation();
    }
  };

  return (
    <>
      <Wrapper>
        <PurchaseInfo>
          <Title>
            <div>Order summary:</div>
          </Title>
          {storeItems.map((item) => {
            return (
              <>
                <div>{item.name}</div>
                <div>{item.quantity}</div>
              </>
            );
          })}
          <Title>
            <div>Please Provide The Following Information</div>
          </Title>
          <ShippingAddress>
            <Info>
              <Title>Shipping Address</Title>
            </Info>
            <Info>
              <InfoLabel>Full Name:</InfoLabel>
              <UserInputName
                id="name"
                onChange={(ev) => {
                  handleChange(setFullName, ev);
                }}
              ></UserInputName>
            </Info>
            <Info>
              <InfoLabel>Email Address:</InfoLabel>
              <UserInput
                type="email"
                id="name"
                onChange={(ev) => {
                  handleChange(setEmailAdress, ev);
                }}
              ></UserInput>
            </Info>
            <Info>
              <InfoLabel>Address:</InfoLabel>
              <UserInput
                onChange={(ev) => {
                  handleChange(setStreetAdress, ev);
                }}
              ></UserInput>
            </Info>
          </ShippingAddress>
          <CardInfo>
            <Info>
              <Title>Payment Method</Title>
            </Info>
            <Info>
              <InfoLabel>Card Number:</InfoLabel>
              <UserInput
                minlength="16"
                placeholder="XXXX XXXX XXXX XXXX"
                onChange={(ev) => {
                  handleChange(setCreditCard, ev);
                }}
              ></UserInput>
            </Info>
            <Info>
              <InfoLabel>Name on Card:</InfoLabel>
              <UserInput
                placeholder="Name"
                onChange={(ev) => {
                  handleChange(setCCName, ev);
                }}
              ></UserInput>
            </Info>
            <Info>
              <InfoLabel>Expiry Date (MM/DD):</InfoLabel>
              <UserInput
                minlength="5"
                onChange={(ev) => {
                  handleChange(setExpiryDate, ev);
                }}
              ></UserInput>
            </Info>
          </CardInfo>
          <ConfirmButton type="submit" onClick={checkIsValid}>
            Confirm Purchase
          </ConfirmButton>
          <HyperLink
            onClick={() => {
              handleExitCart();
            }}
          >
            Go back to shopping
          </HyperLink>
        </PurchaseInfo>
        {confirmation && <PurchaseConfirmation fullName={fullName} />}
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #15616d;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.75);
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
`;
const PurchaseInfo = styled.div`
  text-align: center;
  color: white;
`;
const ShippingAddress = styled.div`
  margin-top: 10px;
`;
const CardInfo = styled.div`
  margin-top: 20px;
`;
const ConfirmButton = styled.button`
  background-color: lightgreen;
  font-weight: bold;
  height: 30px;
  margin-top: 20px;
  border-radius: 5px;
`;
const Info = styled.div`
  display: flex;
  justify-content: center;
`;
const InfoLabel = styled.label`
  flex: 1;
  text-align: right;
  margin-right: 20px;
  margin-bottom: 10px;
`;
const UserInput = styled.input`
  flex: 1;
  border-radius: 5px;
  margin-right: 20px;
  margin-bottom: 10px;
  border-width: 2px;
`;

const UserInputName = styled.input`
  flex: 1;
  border-radius: 5px;
  margin-right: 20px;
  margin-bottom: 10px;
  border-width: 2px;
`;

const HyperLink = styled.p`
  cursor: pointer;
  margin: 10px;
  &:hover {
    text-decoration: underline;
  }
`;
