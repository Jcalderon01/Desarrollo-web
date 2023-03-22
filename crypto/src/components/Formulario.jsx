import { useEffect, useState } from "react";
import React from "react";
import Error from "./Error";
import styled from "@emotion/styled";
import { monedas } from "../data/monedas";
import useSelectorMonedas from "../hooks/useSelectorMonedas";
import Data from "./Data";

const Contenedor = styled.div`
  max-width: 90%;
  margin: 0 auto;
  width: 90%;
  flex-wrap: wrap;
`;

const InputSubmit = styled.input`
  background-color: #da8d00;
  border-radius: 5px;
  width: 40%;
  padding: 8px;
  color: black;
  font-weight: 100;
  font-size: 20px;
  text-align: center;

  &:hover {
    background-color: green;
    cursor: pointer;
  }
`;

const Labels = styled.label`
  color: black;
  font-size: 24px;
`;

const Formulario = () => {
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);
  const [datos, setDatos] = useState({});
  const [consulta, setConsulta] = useState(false);
  const [imagenCrypto, setImagenCrypto] = useState("");
  const [moneda, SelectorMonedas] = useSelectorMonedas(
    <Labels>
      Selecciona tu moneda<br></br>
    </Labels>,
    monedas
  );
  const [criptomoneda, SelectorCryptos] = useSelectorMonedas(
    <Labels>
      Selecciona tu crypto moneda<br></br>
    </Labels>,
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
    const imagenUrl = `https://cryptocompare.com${objetoCypto.CoinInfo.ImageUrl}`;
    setImagenCrypto(imagenUrl);
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
    <Contenedor>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={manejadorSubmit}>
        <SelectorMonedas />
        <br></br>
        <SelectorCryptos />
        <br></br>
        <InputSubmit type="submit" value="Cotizar" />
      </form>
      {consulta ? <Data data={datos} imagen={imagenCrypto} /> : null}
    </Contenedor>
  );
};

export default Formulario;
