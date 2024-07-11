import { ThemeProvider, createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    h1: {
      fontSize: "12rem",
      "@media (min-width:600px)": {
        fontSize: "1.8rem",
      },
    },
    body1: {
      fontSize: "0.9rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
    },
  },
});
