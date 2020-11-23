import React from "react";
import styled from "styled-components";

const QuantitySelector = ({ numInStock }) => {
  return (
    <Wrapper>
      <Form>
        <Label for="quantity">Quantity:</Label>
        <Dropdown
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max={numInStock}
          step="1"
        />
      </Form>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const Form = styled.form``;
const Label = styled.label``;
const Dropdown = styled.input``;
export default QuantitySelector;
