import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { colorsSet } from "../Global/Colors";
import { useParams } from "react-router";

const ItemDetails = () => {
  let { itemId } = useParams();
  const [singleItem, setSingleItem] = useState(null);

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

  return (
    <>
      {!singleItem && "Loading"}
      {singleItem && (
        <Wrapper>
          <ProductImg src={singleItem.imageSrc} />
          <ItemInfoWrapper>
            <div>
              <Brand>Brand</Brand>
              <ItemName>{singleItem.name}</ItemName>
            </div>
            <Cost>{singleItem.price}</Cost>
            <p>Quantity in stock: {singleItem.numInStock}</p>
            <Form>
              <QtyInput>Quantity:</QtyInput>
              <Select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Select>
            </Form>

            <PurchaseButton>Add to Cart</PurchaseButton>
          </ItemInfoWrapper>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin: 40px 65px;
  margin-left: 120px;
`;

const ProductImg = styled.img`
  height: 650px;
  width: auto;
  border-radius: 12px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const ItemInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 60px;
`;

const Brand = styled.h2`
  font-size: 1.8rem;
`;

const ItemName = styled.h1`
  font-size: 2.3rem;
`;

const Cost = styled.p`
  font-size: 1.8rem;
`;

const QtyInput = styled.div``;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const Select = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const PurchaseButton = styled.button`
  background-color: ${colorsSet.primary};
  color: white;
  font-size: 1.2rem;
  border: none;
  height: 60px;
  width: 230px;
  border-radius: 12px;
  padding: 10px 40px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${colorsSet.primaryHover};
  }
`;

export default ItemDetails;
