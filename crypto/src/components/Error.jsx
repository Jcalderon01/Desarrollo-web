import React from "react";
import styled from "@emotion/styled";

const TextoError = styled.div`
  background-color: red;
  color: #fff;
  padding: 15px;
  text-align: center;
  font-size: 20px;
  margin-top: 30px;
`;

const Error = ({ children }) => {
  return <TextoError>{children}</TextoError>;
};

export default Error;
