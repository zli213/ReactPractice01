import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SlideSelect from "./components/SlideSelect";
import TenureSelect from "./components/TenureSelect";
import Result from "./components/Result";
import { Container, Grid, useMediaQuery, useTheme, Box } from "@mui/material";
import "./App.css";

function App() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  });

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <SlideSelect
                data={data}
                setData={setData}
                isSmallScreen={isSmallScreen}
              />
              <TenureSelect data={data} setData={setData} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Result
              data={data}
              setData={setData}
              isSmallScreen={isSmallScreen}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
