import React, { useState } from "react";
import styled from "styled-components";
import { colorsSet } from "../../Global/Colors";
import { useHistory } from "react-router";
import { PurchaseConfirmation } from "../PurchaseConfirmation";
import Modal from "react-modal";
import { removeAllItem } from "../../actions";
import { useDispatch } from "react-redux";

export const PurchaseModal = ({
  storeItems,
  total,
  showModal,
  setShowModal,
  handle,
  cartArr,
  setCartArr,
}) => {
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAdress] = useState("");
  const [streetAdress, setStreetAdress] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [ccName, setCCName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [confirmation, setConfirmation] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  console.log(showModal);

  const history = useHistory();
  const handleExitCart = () => {
    history.push("/");
  };

  const handleChange = (state, ev) => {
    state(ev.target.value);
  };

  const handleConfirmation = () => {
    setConfirmation(true);
    dispatch(removeAllItem());
  };
  const singleNum = creditCard.split("");
  const isNumber = singleNum.map((num) => {
    return (
      num === " " ||
      num === "0" ||
      num === "1" ||
      num === "2" ||
      num === "3" ||
      num === "4" ||
      num === "5" ||
      num === "6" ||
      num === "7" ||
      num === "8" ||
      num === "9"
    );
  });

  const singleDate = expiryDate.split("");
  const isDateValid = singleDate.map((num) => {
    return (
      num === "/" ||
      num === "0" ||
      num === "1" ||
      num === "2" ||
      num === "3" ||
      num === "4" ||
      num === "5" ||
      num === "6" ||
      num === "7" ||
      num === "8" ||
      num === "9"
    );
  });

  let checkIsValid = (ev) => {
    ev.preventDefault();

    if (!fullName) {
      setErrorMsg("fullName_error");
    } else if (!emailAddress || !emailAddress.includes("@")) {
      setErrorMsg("email_error");
    } else if (!streetAdress) {
      setErrorMsg("street_error");
    } else if (
      !creditCard ||
      isNumber.includes(false) ||
      isNumber.length < 16
    ) {
      setErrorMsg("ccNum_error");
    } else if (!ccName) {
      setErrorMsg("ccName_error");
    } else if (
      !expiryDate ||
      isDateValid.includes(false) ||
      isDateValid.length < 5
    ) {
      setErrorMsg("expiry_error");
    } else {
      setErrorMsg(null);
      handleConfirmation();
    }
  };

  return (
    <>
      <Modal
        isOpen={showModal}
        style={{
          overlay: {
            zIndex: 1001,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
          content: {
            position: "absolute",
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }}
      >
        <Wrapper>
          <PurchaseInfo>
            <Title>ORDER SUMMARY</Title>
            {storeItems.map((item) => {
              return (
                <ItemContainer>
                  <ProductImg src={item.imageSrc} />{" "}
                  <ItemDetails>
                    <Bold>{item.quantity} x</Bold>
                    <ProductName>{item.name}</ProductName>
                  </ItemDetails>
                </ItemContainer>
              );
            })}
            <Info>
              Total: <Bold>${total}</Bold>
            </Info>
            <Divider />
            <ShippingAddress>
              <Info>
                <Title>SHIPPING INFORMATION</Title>
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
            </ShippingAddress>{" "}
            <Divider />
            <CardInfo>
              <Info>
                <Title>PAYMENT METHOD</Title>
              </Info>
              <Info>
                <InfoLabel>Card Number:</InfoLabel>
                <UserInput
                  minlength="16"
                  onChange={(ev) => {
                    handleChange(setCreditCard, ev);
                  }}
                ></UserInput>
              </Info>
              <Info>
                <InfoLabel>Cardholder</InfoLabel>
                <UserInput
                  onChange={(ev) => {
                    handleChange(setCCName, ev);
                  }}
                ></UserInput>
              </Info>
              <Info>
                <InfoLabel>Expiry Date (MM/YY):</InfoLabel>
                <UserInput
                  minlength="5"
                  onChange={(ev) => {
                    handleChange(setExpiryDate, ev);
                  }}
                ></UserInput>
              </Info>
            </CardInfo>
            {errorMsg === "fullName_error" && (
              <ErrorBox> Your name is wrong </ErrorBox>
            )}
            {errorMsg === "email_error" && (
              <ErrorBox> Your email is wrong </ErrorBox>
            )}
            {errorMsg === "street_error" && (
              <ErrorBox> Your address is wrong </ErrorBox>
            )}
            {errorMsg === "ccNum_error" && (
              <ErrorBox> Invalid credit card</ErrorBox>
            )}
            {errorMsg === "ccName_error" && (
              <ErrorBox> Credit name holder missing </ErrorBox>
            )}
            {errorMsg === "expiry_error" && (
              <ErrorBox> Wrong expiry date </ErrorBox>
            )}
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
          {confirmation && (
            <PurchaseConfirmation
              fullName={fullName}
              emailAddress={emailAddress}
              streetAdress={streetAdress}
            />
          )}
        </Wrapper>
      </Modal>
    </>
  );
};

const Wrapper = styled.div`
  z-index: 10;
  padding: 5%;
  /* position: absolute;
  top: 20px;
  left: 10%; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  /* border-radius: 10px;
  box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.75);
  border: 2px solid ${colorsSet.primary}; */
  color: black;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
`;
const PurchaseInfo = styled.div`
  text-align: center;
`;
const ShippingAddress = styled.div``;
const CardInfo = styled.div`
  margin-top: 20px;
`;
const ConfirmButton = styled.button`
  margin: 20px;
  background-color: ${colorsSet.primary};
  font-weight: bold;
  border: 0px;
  border-radius: 25px;
  padding: 20px 20px;
  color: white;
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

const ErrorBox = styled.div`
  border: 2px solid red;
  border-radius: 12px;
  margin: 10px;
  padding: 10px;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ItemDetails = styled.div`
  display: flex;
  align-items: center;
`;

const ProductImg = styled.img`
  width: 50px;
  border-radius: 10%;
`;

const Bold = styled.div`
  font-weight: bold;
  margin-left: 10px;
`;
const ProductName = styled.span`
  margin-left: 10px;
`;

const Divider = styled.div`
  border-top: 2px dashed lightgrey;
  margin: 20px;
`;
