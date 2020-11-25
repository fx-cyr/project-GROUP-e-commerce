import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cart from "./Cart";
import { Sidebar } from "./Sidebar";
import Item from "./Item";
import Entertainment from "./BannersImg/Entertainment.jpeg";
import Fitness from "./BannersImg/Fitness.jpg";
import Gaming from "./BannersImg/Gaming.jpg";
import Industrial from "./BannersImg/Industrial.jpg";
import Lifestyle from "./BannersImg/Lifestyle2.0.jpeg";
import Medical from "./BannersImg/Medical.jpg";
import Pets from "./BannersImg/Pets.jpg";
import All from "./BannersImg/All2.jpeg";
import Arms from "./BannersImg/Arm.jpg";
import Others from "./BannersImg/Others.jpg";
import Feet from "./BannersImg/Foot.jpeg";
import Head from "./BannersImg/Head.jpg";
import Wrist from "./BannersImg/Wrist.jpg";

export const Homepage = ({ category, setCategory }) => {
  const [allItems, setAllItems] = useState([]);

  const fetchItems = async () => {
    try {
      const res = await fetch("/api/items");
      const json = await res.json();
      if (res.ok) {
        // console.log(json);
        setAllItems(json.items);
      }
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // console.log(allItems);
  return (
    <HomePageWrapper>
      <SidebarWrapper>
        <Sidebar setCategory={setCategory} />
      </SidebarWrapper>
      <ItemDisplayGridWrapper>
        {category === "all" && (
          <ItemGrid>
            <BannerDivImg img={All}>
              <Overlay>
                <CategoryName>All categories</CategoryName>
              </Overlay>
            </BannerDivImg>
            {allItems.map((item) => {
              return <Item key={item._id} item={item} />;
            })}
          </ItemGrid>
        )}

        {category === "entertainement" && (
          <ItemGrid>
            <BannerDivImg img={Entertainment}>
              <Overlay>
                <CategoryName>Entertainment</CategoryName>
              </Overlay>
            </BannerDivImg>
            {allItems.map((item) => {
              if (item.category === "Entertainment") {
                return (
                  <div>
                    <Item key={item._id} item={item} />
                  </div>
                );
              }
            })}
          </ItemGrid>
        )}
        {category === "fitness" && (
          <ItemGrid>
            <BannerDivImg img={Fitness}>
              <Overlay>
                <CategoryName>Fitness</CategoryName>
              </Overlay>
            </BannerDivImg>
            {allItems.map((item) => {
              if (item.category === "Fitness") {
                return (
                  <div>
                    <Item key={item._id} item={item} />
                  </div>
                );
              }
            })}
          </ItemGrid>
        )}
        {category === "gaming" && (
          <ItemGrid>
            <BannerDivImg img={Gaming}>
              <Overlay>
                <CategoryName>Gaming</CategoryName>
              </Overlay>
            </BannerDivImg>
            {allItems.map((item) => {
              if (item.category === "Gaming") {
                return (
                  <div>
                    <Item key={item._id} item={item} />
                  </div>
                );
              }
            })}
          </ItemGrid>
        )}
        {category === "industrial" && (
          <ItemGrid>
            <BannerDivImg img={Industrial}>
              <Overlay>
                <CategoryName>Industrial</CategoryName>
              </Overlay>
            </BannerDivImg>
            {allItems.map((item) => {
              if (item.category === "Industrial") {
                return (
                  <div>
                    <Item key={item._id} item={item} />
                  </div>
                );
              }
            })}
          </ItemGrid>
        )}
        {category === "lifestyle" && (
          <ItemGrid>
            <BannerDivImg img={Lifestyle}>
              <Overlay>
                <CategoryName>Lifestyle</CategoryName>
              </Overlay>
            </BannerDivImg>
            {allItems.map((item) => {
              if (item.category === "Lifestyle") {
                return (
                  <div>
                    <Item key={item._id} item={item} />
                  </div>
                );
              }
            })}
          </ItemGrid>
        )}
        {category === "medical" && (
          <ItemGrid>
            <BannerDivImg img={Medical}>
              <Overlay>
                <CategoryName>Medical</CategoryName>
              </Overlay>
            </BannerDivImg>
            {allItems.map((item) => {
              if (item.category === "Medical") {
                return (
                  <div>
                    <Item key={item._id} item={item} />
                  </div>
                );
              }
            })}
          </ItemGrid>
        )}

        {category === "pets&animals" && (
          <ItemGrid>
            <BannerDivImg img={Pets}>
              <Overlay>
                <CategoryName>Pets and Animals</CategoryName>
              </Overlay>
            </BannerDivImg>
            {allItems.map((item) => {
              if (item.category === "Pets and Animals") {
                return (
                  <div>
                    <Item key={item._id} item={item} />
                  </div>
                );
              }
            })}
          </ItemGrid>
        )}
        {category === "arms" && (
          <ItemGrid>
            <BannerDivImg img={Arms}>
              <Overlay>
                <CategoryName>Arms</CategoryName>
              </Overlay>
            </BannerDivImg>
            {allItems.map((item) => {
              if (item.body_location === "Arms") {
                return (
                  <div>
                    <Item key={item._id} item={item} />
                  </div>
                );
              }
            })}
          </ItemGrid>
        )}
        {category === "chest" && (
          <ItemGrid>
            <BannerDivImg img={Others}>
              <Overlay>
                <CategoryName>Chest</CategoryName>
              </Overlay>
            </BannerDivImg>
            {allItems.map((item) => {
              if (item.body_location === "Chest") {
                return (
                  <div>
                    <Item key={item._id} item={item} />
                  </div>
                );
              }
            })}
          </ItemGrid>
        )}
        {category === "feet" && (
          <ItemGrid>
            <BannerDivImg img={Feet}>
              <Overlay>
                <CategoryName>Feet</CategoryName>
              </Overlay>
            </BannerDivImg>
            {allItems.map((item) => {
              if (item.body_location === "Feet") {
                return (
                  <div>
                    <Item key={item._id} item={item} />
                  </div>
                );
              }
            })}
          </ItemGrid>
        )}
        {category === "hands" && (
          <ItemGrid>
            <BannerDivImg img={Others}>
              <Overlay>
                <CategoryName>Hands</CategoryName>
              </Overlay>
            </BannerDivImg>
            {allItems.map((item) => {
              if (item.body_location === "Hands") {
                return (
                  <div>
                    <Item key={item._id} item={item} />
                  </div>
                );
              }
            })}
          </ItemGrid>
        )}
        {category === "head" && (
          <ItemGrid>
            <BannerDivImg img={Head}>
              <Overlay>
                <CategoryName>Head</CategoryName>
              </Overlay>
            </BannerDivImg>
            {allItems.map((item) => {
              if (item.body_location === "Head") {
                return (
                  <div>
                    <Item key={item._id} item={item} />
                  </div>
                );
              }
            })}
          </ItemGrid>
        )}
        {category === "neck" && (
          <ItemGrid>
            <BannerDivImg img={Others}>
              <Overlay>
                <CategoryName>Neck</CategoryName>
              </Overlay>
            </BannerDivImg>
            {allItems.map((item) => {
              if (item.body_location === "Neck") {
                return (
                  <div>
                    <Item key={item._id} item={item} />
                  </div>
                );
              }
            })}
          </ItemGrid>
        )}
        {category === "torso" && (
          <ItemGrid>
            <BannerDivImg img={Others}>
              <Overlay>
                <CategoryName>Torso</CategoryName>
              </Overlay>
            </BannerDivImg>
            {allItems.map((item) => {
              if (item.body_location === "Torso") {
                return (
                  <div>
                    <Item key={item._id} item={item} />
                  </div>
                );
              }
            })}
          </ItemGrid>
        )}
        {category === "waist" && (
          <ItemGrid>
            <BannerDivImg img={Others}>
              <Overlay>
                <CategoryName>Waist</CategoryName>
              </Overlay>
            </BannerDivImg>
            {allItems.map((item) => {
              if (item.body_location === "Waist") {
                return (
                  <div>
                    <Item key={item._id} item={item} />
                  </div>
                );
              }
            })}
          </ItemGrid>
        )}
        {category === "wrist" && (
          <ItemGrid>
            <BannerDivImg img={Wrist}>
              <Overlay>
                <CategoryName>Wrist</CategoryName>
              </Overlay>
            </BannerDivImg>
            {allItems.map((item) => {
              if (item.body_location === "Wrist") {
                return (
                  <div>
                    <Item key={item._id} item={item} />
                  </div>
                );
              }
            })}
          </ItemGrid>
        )}
      </ItemDisplayGridWrapper>
      <CartWrapper>
        <Cart />
      </CartWrapper>
    </HomePageWrapper>
  );
};

const HomePageWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
`;

const SidebarWrapper = styled.div`
  width: 15%;
`;

const ItemDisplayGridWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 21%; /* explanation below */
  margin: 210px 40px 5px auto;
  height: 100%;
`;

const ItemGrid = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const BannerDivImg = styled.div`
  position: absolute;
  top: 10px;
  font-size: 7rem;
  font-style: italic;
  text-align: center;
  padding-top: 55px;
  width: 65%;
  min-height: 205px;
  max-height: 205px;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => {
    return `url(${props.img})`;
  }};
`;
const CategoryName = styled.p`
  color: white;
  z-index: 3;
`;
const Overlay = styled.div`
  width: 65%;
  min-height: 205px;
  max-height: 205px;
  top: 0px;
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CartWrapper = styled.div`
  width: 15%;
`;
