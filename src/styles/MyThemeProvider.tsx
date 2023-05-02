import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";

import { theme } from "./theme";

export const MyThemeProvider = ({ children }: any) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};
