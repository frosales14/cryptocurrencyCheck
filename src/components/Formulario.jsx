import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { currencies } from "../constants/currencies";
import { useEffect, useState } from "react";
import Error from "./Error";

const InputSubmit = styled.input`
  background-color: #9497ff;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  color: white;
  font-family: "Lato", sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  margin-top: 30px;
  &:hover {
    cursor: pointer;
    background-color: #7a7dfe;
  }
`;

const Formulario = ({ setCurrencies }) => {
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);

  const [currency, SelectMonedas] = useSelectMonedas(
    "Elige tu moneda",
    currencies
  );

  const [cryptoCurrency, SelectCrypto] = useSelectMonedas(
    "Elige tu Criptomoneda",
    cryptos
  );

  const APIUrl =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

  useEffect(() => {
    const getAPIData = async () => {
      const response = await fetch(APIUrl);
      const result = await response.json();

      const cryptoList = result.Data.map((crypto) => {
        return {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName,
        };
      });
      setCryptos(cryptoList);
    };
    getAPIData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if ([currency, cryptoCurrency].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    setCurrencies({
      currency,
      cryptoCurrency,
    });
  };

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas></SelectMonedas>
        <SelectCrypto></SelectCrypto>
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  );
};

export default Formulario;
