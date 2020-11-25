import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cart from "./Cart";
import { Sidebar } from "./Sidebar";
import Item from "./Item";
import { Loading } from "./Loading"

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

  console.log(allItems);
  return (
    <HomePageWrapper>
      <SidebarWrapper>
        <Sidebar setCategory={setCategory} />
      </SidebarWrapper>
      
        {allItems.length === 0 && <Loading />}
        
        {allItems &&
        <ItemDisplayGridWrapper>

          {category === "all" &&
          allItems.map((item) => {
            return <Item key={item._id} item={item} />;
          })}

        {category === "entertainement" &&
          allItems.map((item) => {
            if (item.category === "Entertainment") {
              return <Item key={item._id} item={item} />;
            }
          })}
        {category === "fitness" &&
          allItems.map((item) => {
            if (item.category === "Fitness") {
              return <Item key={item._id} item={item} />;
            }
          })}
        {category === "gaming" &&
          allItems.map((item) => {
            if (item.category === "Gaming") {
              return <Item key={item._id} item={item} />;
            }
          })}
        {category === "industrial" &&
          allItems.map((item) => {
            if (item.category === "Industrial") {
              return <Item key={item._id} item={item} />;
            }
          })}

        {category === "lifestyle" &&
          // TODO Add lifestyle Components
          allItems.map((item) => {
            if (item.category === "Lifestyle") {
              return <Item key={item._id} item={item} />;
            }
          })}
        {category === "medical" &&
          // TODO Add medical Components
          allItems.map((item) => {
            if (item.category === "Medical") {
              return <Item key={item._id} item={item} />;
            }
          })}

        {category === "pets&animals" &&
          // TODO Add pets&animals Components
          allItems.map((item) => {
            if (item.category === "Pets and Animals") {
              return <Item key={item._id} item={item} />;
            }
          })}

        {category === "arms" &&
          // TODO Add pets&animals Components
          allItems.map((item) => {
            if (item.body_location === "Arms") {
              return <Item key={item._id} item={item} />;
            }
          })}
        {category === "chest" &&
          // TODO Add pets&animals Components
          allItems.map((item) => {
            if (item.body_location === "Chest") {
              return <Item key={item._id} item={item} />;
            }
          })}
        {category === "feet" &&
          // TODO Add pets&animals Components
          allItems.map((item) => {
            if (item.body_location === "Feet") {
              return <Item key={item._id} item={item} />;
            }
          })}
        {category === "hands" &&
          // TODO Add pets&animals Components
          allItems.map((item) => {
            if (item.body_location === "Hands") {
              return <Item key={item._id} item={item} />;
            }
          })}
        {category === "head" &&
          // TODO Add pets&animals Components
          allItems.map((item) => {
            if (item.body_location === "Head") {
              return <Item key={item._id} item={item} />;
            }
          })}
        {category === "neck" &&
          // TODO Add pets&animals Components
          allItems.map((item) => {
            if (item.body_location === "Neck") {
              return <Item key={item._id} item={item} />;
            }
          })}
        {category === "torso" &&
          // TODO Add pets&animals Components
          allItems.map((item) => {
            if (item.body_location === "Torso") {
              return <Item key={item._id} item={item} />;
            }
          })}
        {category === "waist" &&
          // TODO Add pets&animals Components
          allItems.map((item) => {
            if (item.body_location === "Waist") {
              return <Item key={item._id} item={item} />;
            }
          })}
        {category === "wrist" &&
          // TODO Add pets&animals Components
          allItems.map((item) => {
            if (item.body_location === "Wrist") {
              return <Item key={item._id} item={item} />;
            }
          })}
          </ItemDisplayGridWrapper> 
          }
        
      <CartWrapper>
        <Cart />
      </CartWrapper>
    </HomePageWrapper>
  );
};

const HomePageWrapper = styled.div`
  position: relative;
  display: flex;
`;

const SidebarWrapper = styled.div`
  width: 20%;
`;

const ItemDisplayGridWrapper = styled.div`
  width: 65%;
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 21%; /* explanation below */
  margin: 5px;
  height: 100px;
`;

const CartWrapper = styled.div`
  width: 15%;
`;
