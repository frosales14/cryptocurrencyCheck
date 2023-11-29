import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  color: white;
  font-family: "Lato", sans-serif;
  align-items: center;
  gap: 1rem;
`;

const ImagenMoneda = styled.img`
  display: block;
  width: 120px;
`;

const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;

const Texto = styled.p`
  font-size: 17px;
  span {
    font-weight: 700;
  }
`;

export const Resultado = ({ result }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGE24HOUR, IMAGEURL, LASTUPDATE } = result;
  return (
    <Container>
      <ImagenMoneda
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="logo moneda"
      />
      <div>
        <Precio>
          El precio es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          El precio mas alto del dia es de: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          El precio mas bajo del dia es de: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variacion ultimas 24 horas: <span>{CHANGE24HOUR}</span>
        </Texto>
        <Texto>
          Ultima actualizacion: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Container>
  );
};
