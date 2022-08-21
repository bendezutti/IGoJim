import React from "react";
import NavBar from "./Components/NavBar.js";
import LineChart from "./Components/LineChart";
import {UserData} from "./Data"
import {useState} from 'react'


function App() {
  const [userData, setUserState] = useState({
    
    labels: UserData.map((data) => data.year),
      datasets: [{
        label: "Max Increase Per Year",
        data: UserData.map((data) => data.userMax),
        borderColor: ["black"],
        
    }] 
  })

  //const person = new Person("John", 21);
  
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <div style ={{width:1200}}>
        <LineChart chartData={userData} />
      </div>
      <div>
      </div>
    </div>
  );
}
export default App;
