import { ThemeProvider, createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    h1: {
      fontSize: "12rem",
    },
  },
});
