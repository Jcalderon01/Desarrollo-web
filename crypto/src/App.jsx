import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import ImageCrypto from "./img/crypto.png";

function App() {
  const Contenedor = styled.div`
    display: flex;

    max-width: 90%;
    margin: 0 auto;
    padding-top: 10%;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    flex-wrap: wrap;
  `;

  const Imagen = styled.img`
    display: flex;

    max-width: 60%;
    width: 40%;
    height: auto;
    margin: 1px auto 0 auto;
    display: block;
  `;

  const Titulo = styled.h1`
    display: flex;

    font-family: "Roboto Slab", serif;
    color: #3fa03f;
    text-align: center;
    margin-top: 10px;
    font-weight: 300;
    margin-bottom: 10px;
    font-size: 100px;
    //-webkit-text-stroke-width: 1px;
    // -webkit-text-stroke-color: ;
    &::after {
    }
  `;

  return (
    <Contenedor>
      <Imagen src={ImageCrypto} />
      <div>
        <Titulo>CoinChecker</Titulo>
        <Formulario />
      </div>
    </Contenedor>
  );
}

export default App;
