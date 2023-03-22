import React from "react";
import styled from "@emotion/styled";

const Datos = styled.div`
  background-color: #c4c1bc;
  border-radius: 5px;
  padding: 10px;
  margin: "15px";
  color: "black";
  width: 40%;
  font-weight: 100;
  text-align: center;
  margin-top: 10px;
`;

const Data = ({ data }) => {
  const { pAhora, pInicio, pBajo } = data;
  return (
    <Datos>
      <h1>Actual: {pAhora}</h1>
      <h1>Inicio: {pInicio}</h1>
      <h1>Bajo: {pBajo}</h1>
    </Datos>
  );
};

export default Data;
