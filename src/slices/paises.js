import { createSlice } from "@reduxjs/toolkit";

export const initialState = [
  { id: 0, pais: "Chile", moneda: "peso" },
  { id: 1, pais: "Alemania", moneda: "jojoj" },
  { id: 2, pais: "Colombia", moneda: "peso colombiano" }
];

export const paises = createSlice({
  name: "paises",
  initialState,
  reducers: {
    agregarPais: (state, action) => {
      state.push(action.payload);
    },
    actualizarPais: (state, action) => {},
    eliminarPais: (state, action) => {
      const encontrado = state.find((item) => item.id === action.payload);

      state.splice(state.indexOf(encontrado), 1);
    }
  }
});

export const { agregarPais, eliminarPais } = paises.actions;
export default paises.reducer;
