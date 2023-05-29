import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import ImageCrypto from "./img/crypto.png";

function App() {
  const Contenedor = styled.div`
    max-width: 900px;
    margin: 0 auto;

    width: 90%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    } ;
  `;

  const Imagen = styled.img`
    padding-top: 200px;
    max-width: 50%;
    width: 50%;
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
