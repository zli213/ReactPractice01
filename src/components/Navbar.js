import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";

const Navbar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <AppBar position="static">
      <Container maxWidth="sm">
        <Toolbar sx={{ justifyContent: 'center'}}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: isSmallScreen ? "1.2rem" : "1.5rem",
            }}
          >
            Bank of React
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
