import styled from "@emotion/styled";

const Label = styled.label`
  color: #fff;
`;

const useSelectMonedas = (label, options) => {
  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
      <select>
        <option value="">Seleccione</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );

  return [SelectMonedas];
};

export default useSelectMonedas;
