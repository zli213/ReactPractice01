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
        onChange={(e, value) => console.log(value)}
        unit="$"
        amount={3000}
      />
      <SliderComponent
        title="Down Payment"
        defaultValue={25}
        min={500}
        max={1000}
        step={100}
        onChange={(e, value) => console.log(value)}
        unit="$"
        amount={300}
      />
      <SliderComponent
        title="Loan Amount"
        defaultValue={25}
        min={200}
        max={1000}
        step={100}
        onChange={(e, value) => console.log(value)}
        unit="$"
        amount={700}
      />
    </div>
  );
};

export default SlideSelect;
