import { useEffect, useState } from "react";
import React from "react";
import Error from "./Error";
import styled from "@emotion/styled";
import { monedas } from "../data/monedas";
import useSelectorMonedas from "../hooks/useSelectorMonedas";
import Data from "./Data";

const InputSubmit = styled.input`
  background-color: #002280;
  border-radius: 5px;
  width: 40%;
  padding: 8px;
  color: white;
  font-weight: 100;
  font-size: 20px;
  text-align: center;

  &:hover {
    background-color: grey;
    cursor: pointer;
  }
`;

const Labels = styled.label`
  margin: 15px;
  color: white;
  font-size: 24px;
`;

const Formulario = () => {
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);
  const [datos, setDatos] = useState({});
  const [consulta, setConsulta] = useState(false);
  const [moneda, SelectorMonedas] = useSelectorMonedas(
    <Labels></Labels>,
    monedas
  );
  const [criptomoneda, SelectorCryptos] = useSelectorMonedas(
    <Labels></Labels>,
    cryptos
  );

  //consultar api
  useEffect(() => {
    const consultarApi = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      const arregoloDeCryptos = resultado.Data.map((crypto) => {
        const objeto = {
          id: crypto.CoinInfo.Name,
          nombre: crypto.CoinInfo.FullName,
        };
        console.log(objeto);
        return objeto;
      });
      setCryptos(arregoloDeCryptos);
    };

    consultarApi();
  }, []);

  const manejadorSubmit = async (e) => {
    e.preventDefault();
    if ([moneda, criptomoneda].includes("")) {
      console.log("error");
      setError(true);
      return;
    }
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=${moneda}`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    const objetoCypto = resultado.Data.find(
      (crypto) => crypto.CoinInfo.Name === criptomoneda
    );
    const objetoData = objetoCypto.DISPLAY[moneda];
    setDatos({
      pAhora: objetoData.PRICE,
      pBajo: objetoData.LOWDAY,
      pInicio: objetoData.OPENDAY,
    });
    console.log(objetoData);
    setError(false);
    setConsulta(true);
  };

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={manejadorSubmit}>
        <Labels>Selecciona tu moneda</Labels>
        <br />
        <SelectorMonedas />
        <br />
        <Labels>Selecciona tu moneda</Labels>
        <br />
        <SelectorCryptos />
        <br />
        <InputSubmit type="submit" value="Cotizar" />
      </form>
      {consulta && <Data data={datos} />}
    </>
  );
};

export default Formulario;
