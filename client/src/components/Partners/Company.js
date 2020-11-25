import React from "react";
import styled from "styled-components";
import { colorsSet } from "../../Global/Colors";

export const Company = ({ name, country, url }) => {
  console.log(url);

  //Get rid of http
  let regex = /^(https?|ftp):\/\//g;
  let filteredUrl = url.replace(regex, "");

  return (
    <CompanyContainer>
      <Name>{name}</Name>
      <Country>{country}</Country>
      <URL href={`${url}`} target={"_blank"}>
        {filteredUrl}
      </URL>
    </CompanyContainer>
  );
};

const CompanyContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const Name = styled.div`
  font-size: 1.5rem;
  margin-right: 15px;
  font-weight: bold;
`;

const Country = styled.div`
  margin-right: 15px;
  font-style: italic;
  font-size: 1.3rem;
  color: gray;
`;

const URL = styled.a`
  color: ${colorsSet.secondary};
  font-size: 1.3rem;
  font-weight: bolder;
`;
