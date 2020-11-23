import React from "react";
import styled from "styled-components";
import { Company } from "./Company";

export const Partners = ({ allCompanies }) => {
  console.log(allCompanies);

  //Sort alphabetically
  allCompanies = allCompanies.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  return (
    <Wrapper>
      <CompaniesColumns>
        {allCompanies
          ? allCompanies.map((company) => {
              return (
                <Company
                  key={company._id}
                  name={company.name}
                  country={company.country}
                  url={company.url}
                />
              );
            })
          : "Loading..."}
      </CompaniesColumns>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 50px 0;
`;

const CompaniesColumns = styled.div`
  column-count: 2;
`;
