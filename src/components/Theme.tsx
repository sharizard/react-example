import React from 'react'
import { ThemeProvider } from 'styled-components';

const theme = {
  border: {
    cool: "#124fff"
  }
};

const Theme = ({ children }: any) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export { Theme };