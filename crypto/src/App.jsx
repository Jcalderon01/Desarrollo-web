import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import ImageCrypto from "./img/crypto.png";

function App() {
  const Contenedor = styled.div`
    max-width: 900px;
    margin: 0 auto;
    width: 90%;
    @media (min-width: 92px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2;
    }
  `;

  const Imagen = styled.img`
    max-width: 200px;
    width: 60%;
    margin: 100px auto 0 auto;
    display: block;
  `;

  const Heading = styled.h1`
    font-family: "Roboto Slab", serif;
    color: white;
    text-align: center;
    font-weight: 800;
    margin-top: 80px;
    font-weight: 300;
    margin-bottom: 80px;
    font-size: 40px;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    &::after {
      content: "";
      width: 100px;
      height: 6px;
      background-color: dimgrey;
      display: block;
      margin: 10px auto 0 auto;
    }
  `;

  return (
    <Contenedor>
      <Imagen src={ImageCrypto} />
      <div>
        <Heading>Crypto</Heading>
        <Formulario />
      </div>
    </Contenedor>
  );
}

export default App;
