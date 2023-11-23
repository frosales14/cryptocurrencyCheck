import styled from "@emotion/styled";

import ImagenCripto from "./assets/img/imagen-criptos.png";
import Formulario from "./components/Formulario";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  display: block;
  width: 80%;
  max-width: 400px;
  margin: 100px auto 0 auto;
`;

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin: 80px 0 50px 0;
  font-size: 34px;
  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

function App() {
  return (
    <>
      <Contenedor>
        <Imagen src={ImagenCripto} alt="imagen critpo monedas" />
        <div>
          <Heading>Cotiza Criptomonedas al instante</Heading>
          <Formulario />
        </div>
      </Contenedor>
    </>
  );
}

export default App;
