import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Button from "./Button";
import { useHistory } from "react-router-dom";

const Item = ({ key, item }) => {
  const history = useHistory();
  const handleDetailsRedirect = () => {
    history.push(`/items/${item._id}`);
    console.log("redirect");
  };
  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          onClick={() => {
            handleDetailsRedirect();
          }}
          src={item.imageSrc}
          alt="Watch name"
        />
      </ImageWrapper>

      <Title>{item.name}</Title>
      <Button>Add to cart - {item.price}</Button>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  width: 300px;
  margin: 10px 5px;
  padding: 16px;
  background: #fff;
  box-shadow: 3px 2.8px 2.2px rgba(0, 0, 0, 0.07),
    3px 6.7px 5.3px rgba(0, 0, 0, 0.05), 3px 12.5px 10px rgba(0, 0, 0, 0.042),
    3px 22.3px 17.9px rgba(0, 0, 0, 0.035),
    3px 41.8px 33.4px rgba(0, 0, 0, 0.028), 3px 100px 80px rgba(0, 0, 0, 0.02);
  border-radius: 16px;
  text-align: center;
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  border-radius: 12px;
  border: 3px solid rgba(0, 0, 0, 0.1);
`;
const Image = styled.img`
  width: 150px;
  height: auto;
  display: block;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 600;
`;

const CompanyName = styled.p`
  margin-top: 8px;
  font-style: italic;
`;

export default Item;
