import styled from "styled-components";

export const ButtonDefault = styled.button`
  background-color: whitesmoke(112, 122, 98);
  grid-column: span 2;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 25%;
  margin-right: 25%;
  border-radius: 15px;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  cursor: pointer;
  &:hover {
    background-color: green;
  }
`;

export const ExtendendButton = styled(ButtonDefault)`
  &.disabled {
    background-color: red;
    cursor: not-allowed; /* Cambiar el cursor cuando está deshabilitado */
  }
`;
