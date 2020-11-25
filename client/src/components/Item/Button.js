import styled from "styled-components";
import { colorsSet } from "../../Global/Colors";

const Button = styled.button`
  position: relative;
  display: block;
  width: 100%;
  border-radius: 35px;
  background: ${colorsSet.secondary};
  color: white;
  border: none;
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

export default Button;
