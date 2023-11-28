import { useState } from "react";
import Navbar from "./components/Navbar";
import SlideSelect from "./components/SlideSelect";
import TenurSelect from "./components/TenureSelect";
import Result from "./components/Result";
import "./App.css";
function App() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  });
  return (
    <div className="App">
      <Navbar />
      <div className="mainBoday">
        <div className="left">
          <SlideSelect data={data} setData={setData} />
          <TenurSelect data={data} setData={setData} />
        </div>
        <div className="right">
          <Result data={data} setData={setData} />
        </div>
      </div>
    </div>
  );
}

export default App;
