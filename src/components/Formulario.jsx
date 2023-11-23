import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { currencies } from "../constants/currencies";

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
  &:hover {
    cursor: pointer;
    background-color: #7a7dfe;
  }
`;

const Formulario = () => {
  const [SelectMonedas] = useSelectMonedas("Elige tu moneda", currencies);

  return (
    <form>
      <SelectMonedas></SelectMonedas>
      <InputSubmit type="submit" value="Cotizar" />
    </form>
  );
};

export default Formulario;
