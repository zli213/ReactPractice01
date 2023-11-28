import { Stack, Typography } from "@mui/material";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data }) => {
  const { homeValue, downPayment, loanAmount, loanTerm, interestRate } = data;
  const totalLoadMonths = loanTerm * 12;
  const monthlyInterestRate = interestRate / 100 / 12;
  const monthlyPayment =
    (loanAmount *
      monthlyInterestRate *
      (1 + monthlyInterestRate) ** totalLoadMonths) /
    ((1 + monthlyInterestRate) ** totalLoadMonths - 1);
  const pieChartData = {
    labels: ["Principle", "Interest"],
    datasets: [
      {
        label: "Ratio of Principle and Interest",
        data: [homeValue, downPayment],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Stack>
      <Typography textAlign="center" variant="h5">
        Monthly Payment: ${monthlyPayment.toFixed(2)}
      </Typography>
      <Pie data={pieChartData} />
    </Stack>
  );
};

export default Result;
