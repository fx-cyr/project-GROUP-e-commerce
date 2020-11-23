import React from "react";
import styled from "styled-components";
import { colorsSet } from "../Global/Colors";

export const PurchaseConfirmation = () => {
  return (
    <Wrapper>
      <ConfirmationCard>
        <ConfirmationTitle>
          Your purchased is confirmed. Thank you for choosing DasWatches!
        </ConfirmationTitle>
        <ConfirmationContainer>
          <ConfirmationDetails>
            <span>Item:</span>
          </ConfirmationDetails>
          <ConfirmationDetails>
            <span>Name:</span>
          </ConfirmationDetails>
          <ConfirmationDetails>
            <span>Email:</span>
          </ConfirmationDetails>
          <ConfirmationDetails>
            <span>Shipping Address:</span>
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
  align-items: center;
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
  font-size: 1.2em;
  border-bottom: 4px solid ${colorsSet.primary};
  padding-bottom: 15px;
`;

const ConfirmationContainer = styled.ul`
  padding: 10px;
`;

const ConfirmationDetails = styled.li`
  font-weight: bold;
  padding: 10px;
`;
