import React from "react";
import SliderComponent from "./common/SliderComponent";

const SlideSelect = ({ data, setData }) => {
  const bank_limit = 10000;
  return (
    <div>
      <SliderComponent
        title="Home Value"
        defaultValue={data.homeValue}
        min={1000}
        max={bank_limit}
        step={100}
        value={data.homeValue}
        onChange={(e, value) =>
          setData({
            ...data,
            homeValue: value,
            downPayment: value * 0.2,
            loanAmount: value * 0.8,
          })
        }
        unit="$"
        amount={data.homeValue}
      />
      <SliderComponent
        title="Down Payment"
        defaultValue={data.downPayment}
        value={data.downPayment}
        min={500}
        max={data.homeValue}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            loanAmount: data.homeValue - value,
            downPayment: value,
          })
        }
        unit="$"
        amount={data.downPayment}
      />
      <SliderComponent
        title="Loan Amount"
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        min={200}
        max={data.homeValue}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: data.homeValue - value,
            loanAmount: value,
          })
        }
        unit="$"
        amount={data.loanAmount}
      />
      <SliderComponent
        title="interest Rate"
        defaultValue={data.interestRate}
        value={data.interestRate}
        min={2}
        max={18}
        step={1}
        onChange={(e, value) =>
          setData({
            ...data,
            interestRate: value,
          })
        }
        unit="%"
        amount={data.interestRate}
      />
    </div>
  );
};

export default SlideSelect;
