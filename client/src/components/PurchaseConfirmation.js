import React from "react";
import styled from "styled-components";
import { colorsSet } from "../Global/Colors";

//inserting props from purchase model component
export const PurchaseConfirmation = ({
  fullName,
  emailAddress,
  streetAdress,
}) => {
  const { v4: uuidv4 } = require("uuid");
  const id = uuidv4();
  return (
    <Wrapper>
      <ConfirmationCard>
        <ConfirmationTitle>
          Hi <Name>{fullName}</Name>, your purchased is confirmed! Thank you for
          choosing DasWatches.
        </ConfirmationTitle>
        <ConfirmationContainer>
          <ConfirmationDetails>
            <span>Order: #{id}</span>
          </ConfirmationDetails>
          <ConfirmationDetails>
            <span>Name: {fullName}</span>
          </ConfirmationDetails>
          <ConfirmationDetails>
            <span>Email: {emailAddress}</span>
          </ConfirmationDetails>
          <ConfirmationDetails>
            <span>Shipping Address: {streetAdress}</span>
          </ConfirmationDetails>
        </ConfirmationContainer>
      </ConfirmationCard>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: top;
  padding: 40px;
`;

const ConfirmationCard = styled.div`
  padding: 40px;
  border: 2px solid ${colorsSet.primary};
  border-radius: 16px;
  box-shadow: 0px 8px 23px -2px rgba(22, 98, 108, 0.3);
`;

const ConfirmationTitle = styled.h1`
  color: black;
  font-size: 1.5em;
  border-bottom: 4px solid ${colorsSet.primary};
  padding-bottom: 15px;
`;

const ConfirmationContainer = styled.ul``;

const ConfirmationDetails = styled.li`
  font-weight: bold;
  padding-top: 30px;
`;

const Name = styled.span`
  color: ${colorsSet.primary};
  font-weight: bold;
`;
