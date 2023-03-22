import styled from "@emotion/styled";
import { useState } from "react";

export const useSelectorMonedas = (label, divisas) => {
  const Label = styled.label`
    color: white;
  `;
  const SelectSubmit = styled.select`
    background-color: #f3d137;
    border-radius: 5px;
    padding: 10px;
    width: 40%;
    color: black;
    font-weight: 100;
    text-align: center;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  `;

  const [state, setState] = useState("");

  const SelectorMonedas = () => (
    <>
      <Label>{label}</Label>

      <SelectSubmit value={state} onChange={(e) => setState(e.target.value)}>
        <option>Seleccione una divisa</option>
        {divisas.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </SelectSubmit>
    </>
  );

  return [state, SelectorMonedas];
};

export default useSelectorMonedas;
