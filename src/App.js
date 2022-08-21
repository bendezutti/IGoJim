import React from "react";
import NavBar from "./Components/NavBar.js";
import LineChart from "./Components/LineChart";
import { UserData } from "./Data"
import { useState } from 'react'


function App() {
  const [userData] = useState({
    labels: UserData.map((data) => data.week),
    datasets: [{
      label: "Bench Max Per Week",
      data: UserData.map((data) => data.userMax),
      borderColor: ["black"],

    }]
  })

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <div style={{ width: 2300 }}>
        <LineChart chartData={userData} />
      </div>
      <div>
      </div>
    </div>
  );
}
export default App;
