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
        onChange={(e, value) => setData({ homeValue: value })}
        unit="$"
        amount={data.homeValue}
      />
      <SliderComponent
        title="Down Payment"
        defaultValue={data.downPayment}
        value={data.downPayment}
        min={500}
        max={1000}
        step={100}
        onChange={(e, value) => setData({ downPayment: value })}
        unit="$"
        amount={data.downPayment}
      />
      <SliderComponent
        title="Loan Amount"
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        min={200}
        max={1000}
        step={100}
        onChange={(e, value) => setData({ loanAmount: value })}
        unit="$"
        amount={data.loanAmount}
      />
    </div>
  );
};

export default SlideSelect;
