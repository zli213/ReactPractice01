import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import SlideSelect from "./components/SlideSelect";
import TenurSelect from "./components/TenureSelect";
import Result from "./components/Result";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="mainBoday">
        <div className="left">
          <SlideSelect />
          <TenurSelect />
        </div>
        <div className="right">
          <Result />
        </div>
      </div>
    </div>
  );
}

export default App;
