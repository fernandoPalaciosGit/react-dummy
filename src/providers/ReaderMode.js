import { createContext } from "react";

export const READ_MODE = {
  LIGHT: "light-Mode",
  DARK: "dark-Mode",
};
export const ReaderMode = createContext([READ_MODE.LIGHT, () => {}]);
