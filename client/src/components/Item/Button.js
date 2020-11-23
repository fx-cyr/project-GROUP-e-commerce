import styled from "styled-components";
import { colorsSet } from "../../Global/Colors";

const Button = styled.button`
  position: relative;
  display: block;
  width: 100%;
  border-radius: 12px;
  background: ${colorsSet.primary};
  color: white;
  border: none;
  padding: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

export default Button;
