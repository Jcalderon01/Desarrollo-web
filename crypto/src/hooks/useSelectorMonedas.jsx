import styled from "@emotion/styled";
import { useState } from "react";

export const useSelectorMonedas = (label, divisas) => {
  const Label = styled.label`
    color: white;
  `;

  const [state, setState] = useState("");

  const SelectorMonedas = () => (
    <>
      <Label>{label}</Label>

      <select value={state} onChange={(e) => setState(e.target.value)}>
        <option>Seleccione una divisa</option>
        {divisas.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </select>
    </>
  );

  return [state, SelectorMonedas];
};

export default useSelectorMonedas;
