import React from "react";
import styled from "styled-components";
import { colorSet } from "../../Global/Colors";
export const PurchaseModal = ({ globalState }) => {
    return (
        <Wrapper>
            <PurchaseInfo>
                <Title>
                    <div>
                    Please Provide The Following Information
                    </div>
                </Title>
                <ShippingAddress>
                    <Info>
                        <Title>Shipping Address</Title>
                    </Info>
                    <Info>
                        <InfoLabel>Full Name:</InfoLabel>
                        <UserInput></UserInput>
                    </Info>
                    <Info>
                        <InfoLabel>Email Address:</InfoLabel>
                        <UserInput type="email"></UserInput>
                    </Info>
                    <Info>
                        <InfoLabel>Address:</InfoLabel>
                        <UserInput></UserInput>
                    </Info>
                    <Info>
                        <InfoLabel>City:</InfoLabel>
                        <UserInput></UserInput>
                    </Info>
                    <Info>
                        <InfoLabel>Province:</InfoLabel>
                        <UserInput></UserInput>
                    </Info>
                    <Info>
                        <InfoLabel>Postal Code:</InfoLabel>
                        <UserInput minlength="6"></UserInput>
                    </Info>
                    <Info>
                        <InfoLabel>Country:</InfoLabel>
                        <UserInput></UserInput>
                    </Info>
                </ShippingAddress>
                <CardInfo>
                    <Info>
                        <Title>Payment Method</Title>
                    </Info>
                    <Info>
                        <InfoLabel>Card Number:</InfoLabel>
                        <UserInput minlength="16"></UserInput>
                    </Info>
                    <Info>
                        <InfoLabel>Name on Card:</InfoLabel>
                        <UserInput></UserInput>
                    </Info>
                    <Info>
                        <InfoLabel>Expiry Date (MM/DD):</InfoLabel>
                        <UserInput minlength="5"></UserInput>
                    </Info>
                    <Info>
                        <InfoLabel>CVV:</InfoLabel>
                        <UserInput minlength="3"></UserInput>
                    </Info>
                </CardInfo>
                <ConfirmButton
                type="submit">
                    Confirm Purchase
                </ConfirmButton>
            </PurchaseInfo>
        </Wrapper>
    );
};
const Wrapper = styled.div`
position: absolute;
top: 10%;
left: 37.5%;
height: 600px;
width: 400px;
background-color: #15616d;
border-radius: 10px;
box-shadow: 0px 0px 20px 10px rgba(0,0,0,0.75);
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