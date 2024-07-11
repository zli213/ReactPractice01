import React from "react";
import SliderComponent from "./common/SliderComponent";
import { Box } from "@mui/material";

const SlideSelect = ({ data, setData, isSmallScreen }) => {
  const bank_limit = 10000;

  const handleHomeValueChange = (_, value) => {
    setData({
      ...data,
      homeValue: value,
      downPayment: value * 0.2,
      loanAmount: value * 0.8,
    });
  };

  const handleDownPaymentChange = (_, value) => {
    setData({
      ...data,
      downPayment: value,
      loanAmount: data.homeValue - value,
    });
  };

  const handleLoanAmountChange = (_, value) => {
    setData({
      ...data,
      loanAmount: value,
      downPayment: data.homeValue - value,
    });
  };

  const handleInterestRateChange = (_, value) => {
    setData({
      ...data,
      interestRate: value,
    });
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: isSmallScreen ? "100%" : "400px",
        margin: "0 auto",
        "& .MuiSlider-root": {
          mb: isSmallScreen ? 2 : 3,
        },
      }}
    >
      <SliderComponent
        title="Home Value"
        min={1000}
        max={bank_limit}
        step={100}
        value={data.homeValue}
        onChange={handleHomeValueChange}
        unit="$"
        amount={data.homeValue}
      />
      <SliderComponent
        title="Down Payment"
        min={0}
        max={data.homeValue}
        step={100}
        value={data.downPayment}
        onChange={handleDownPaymentChange}
        unit="$"
        amount={data.downPayment}
      />
      <SliderComponent
        title="Loan Amount"
        min={0}
        max={data.homeValue}
        step={100}
        value={data.loanAmount}
        onChange={handleLoanAmountChange}
        unit="$"
        amount={data.loanAmount}
      />
      <SliderComponent
        title="Interest Rate"
        min={2}
        max={18}
        step={0.1}
        value={data.interestRate}
        onChange={handleInterestRateChange}
        unit="%"
        amount={data.interestRate}
      />
    </Box>
  );
};

export default SlideSelect;
