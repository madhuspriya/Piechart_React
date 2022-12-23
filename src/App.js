import { Paper } from "@mui/material";
import "./App.css";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

function App() {
  return (
    <div className="App">
      <div className="bar">
        <BarChart />
      </div>
      <div className="pie">
        <PieChart />
      </div>
    </div>
  );
}

export default App;
