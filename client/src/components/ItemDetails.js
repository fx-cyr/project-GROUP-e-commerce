import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { colorsSet } from "../Global/Colors";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addItems } from "../actions";
import Cart from "./Cart";
import { Loading } from "./Loading";

const ItemDetails = () => {
  let { itemId } = useParams();
  const [singleItem, setSingleItem] = useState(null);
  const dispatch = useDispatch();
   
  // console.log(singleItem);

  // Data for single item
  const fetchSingleItem = async () => {
    try {
      const res = await fetch(`/api/items/${itemId}`);
      const json = await res.json();
      if (res.ok) {
        console.log(json.item[0]);
        setSingleItem(json.item[0]);
      }
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchSingleItem();
  }, []);

  console.log(singleItem);

  return (
    <>
      {!singleItem && 
      <Loading />
      }
      {singleItem && (
        <Wrapper>
          <ImgWrapper>
            <ProductImg src={singleItem.imageSrc} alt="Item name" />
          </ImgWrapper>
          <ItemInfoWrapper>
            <div>
              <Category>{singleItem.category}</Category>
              <ItemName>{singleItem.name}</ItemName>
            </div>
            <Cost>{singleItem.price}</Cost>
            <Stock>Quantity in stock: {singleItem.numInStock}</Stock>
            {singleItem.numInStock > 0 && (
              <>
                <PurchaseButton onClick={() => dispatch(addItems(singleItem))}>
                  Add to Cart
                </PurchaseButton>
              </>
            )}
            {singleItem.numInStock <= 0 && (
              <OOSButton disabled> Out of stock</OOSButton>
            )}
          </ItemInfoWrapper>
          {/* <CartWrapper> */}
          <Cart />
          {/* </CartWrapper> */}
        </Wrapper>
      )}
    </>
  );
};

// const CartWrapper = styled.div`
//   width: 18%;
//   height: 100vh;
//   justify-content: center;
// `;

const Wrapper = styled.div`
  display: flex;
  margin-left: 100px;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ProductImg = styled.img`
  margin-top: 60px;
  height: 55vh;
  width: 35vw;
  border-radius: 12px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const ItemInfoWrapper = styled.div`
  display: flex;
  width: 300%;
  flex-direction: column;
  margin: 60px 0 50px 50px;
`;

const Category = styled.h2`
  font-size: 1.8rem;
  padding-bottom: 20px;
`;

const ItemName = styled.h1`
  font-size: 2.3rem;
  max-width: 70%;
  padding-bottom: 20px;
`;

const Cost = styled.p`
  font-size: 1.8rem;
  padding-bottom: 20px;
`;

const Stock = styled.p`
  padding-bottom: 10%;
`;

const PurchaseButton = styled.button`
  background-color: ${colorsSet.primary};
  color: white;
  font-size: 1.2rem;
  border: none;
  height: 80px;
  width: 230px;
  border-radius: 12px;
  padding: 10px 40px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${colorsSet.primaryHover};
  }
`;

const OOSButton = styled.button`
  background: ${colorsSet.primaryHover};
  color: white;
  font-size: 1.2rem;
  border: none;
  height: 80px;
  width: 230px;
  border-radius: 12px;
  padding: 10px 40px;
  cursor: not-allowed;
`;



export default ItemDetails;
