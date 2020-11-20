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
                    <div>
                        <Title>Shipping Address</Title>
                    </div>
                    <div>
                        <label>Full Name:</label>
                        <input></input>
                    </div>
                    <div>
                        <label>Address:</label>
                        <input></input>
                    </div>
                    <div>
                        <label>City:</label>
                        <input></input>
                    </div>
                    <div>
                        <label>Province:</label>
                        <input></input>
                    </div>
                    <div>
                        <label>Postal Code:</label>
                        <input></input>
                    </div>
                    <div>
                        <label>Country:</label>
                        <input></input>
                    </div>
                </ShippingAddress>

                <CardInfo>
                    <div>
                        <Title>Payment Method</Title>
                    </div>
                    <div>
                        <label>Card Number:</label>
                        <input></input>
                    </div>
                    <div>
                        <label>Name on Card:</label>
                        <input></input>
                    </div>
                    <div>
                        <label>Expiry Date (MM/DD):</label>
                        <input></input>
                    </div>
                    <div>
                        <label>CVV:</label>
                        <input></input>
                    </div>
                </CardInfo>
                <ConfirmButton>
                    Confirm Purchase
                </ConfirmButton>
                
            </PurchaseInfo>
        </Wrapper>
    );
};

const Wrapper = styled.div`
/* margin-left: 300px; */
position: absolute;
top: 15%;
left: 37.5%;
height: 500px;
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