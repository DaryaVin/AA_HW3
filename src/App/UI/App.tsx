import React from "react";
import "./App.css";
import ColumnCard from "../../Entities/Column/UI/ColumnCard/ui";
import Status from "../../Shared/UI/Status/status";

function App() {
  return(
    <div className="App">
      {/* <Status/> */}
      <ColumnCard/>
    </div>
  ) 
}

export default App;
