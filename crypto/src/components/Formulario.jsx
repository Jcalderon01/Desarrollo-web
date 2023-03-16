import React from "react";
import styled from "@emotion/styled";
import { monedas } from "../data/monedas";
import useSelectorMonedas from "../hooks/useSelectorMonedas";

const InputSubmit = styled.input`
  background-color: #b45454;
  border: none;
  width: 80%;
  padding: 8px;
  color: white;
  font-weight: 100;
  font-size: 20px;
  text-align: center;
  transition: background-color 0.3s ease;
  -webkit-text-stroke-width: 0px;

  &:hover {
    background-color: grey;
    cursor: pointer;
  }
`;
const SelectSubmit = styled.select`
  background-color: #c4c1bc;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin: 15px;
  color: black;
  font-weight: 100;
  text-align: center;
  transition: background-color 0.3s ease;
  -webkit-text-stroke-width: 0px;
  border-radius: 30;
`;

const Formulario = () => {
  const [state, SelectorMonedas] = useSelectorMonedas(
    "Elige tu moneda",
    monedas
  );

  return (
    <form>
      <SelectorMonedas />
      <InputSubmit type="submit" value="cotizar" />
    </form>
  );
};

export default Formulario;
