import { configureStore } from "@reduxjs/toolkit";
import gatitoSlice from "../slices/gatitos";
import paisesSlice from "../slices/paises";
export const tienda = configureStore({
  reducer: {
    gatitosSlice: gatitoSlice,
    paisesSlice: paisesSlice
  }
});
