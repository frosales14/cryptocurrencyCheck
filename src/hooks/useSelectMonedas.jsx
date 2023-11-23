import styled from "@emotion/styled";
import { useState } from "react";

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
`;

const useSelectMonedas = (label, options) => {
  const [state, setState] = useState("");

  const handleSelectChange = (event) => {
    setState(event.target.value);
  };

  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
      <Select value={state} onChange={handleSelectChange}>
        <option value="">Seleccione</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </Select>
    </>
  );

  return [state, SelectMonedas];
};

export default useSelectMonedas;
