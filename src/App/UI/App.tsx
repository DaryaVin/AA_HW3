import React from "react";
import "./App.css";
import ColumnCard from "../../Entities/Column/UI/ColumnCard/ui";
import TaskCard from "../../Entities/Task/Model/Ui/TaskCard/ui";

function App() {
  return (
    <div className="App">
      <ColumnCard color={{ r: 255, g: 255, b: 0 }} name={"Done"} position={1} id={"dnckdmnc"}>
        <TaskCard
          status={"Done"}
          color={{ r: 255, g: 0, b: 255 }}
          name="Kossom Elsisi"
          tag={["Kossom Elsisi", "Kossom Elsisi"]}
          id={"dkcmckd"}
          description="Kossom Elsisi Kossom Elsisi Kossom Elsisi Kossom Elsisi Kossom Elsisi Kossom Elsisi Kossom Elsisi "
        />
        <TaskCard
          status={"ldmd"}
          color={{ r: 255, g: 0, b: 255 }}
          name="mvkvm"
          tag={["djnjdn", "djdmc"]}
          id={"dkcmckd"}
          description="kdnckdckdkdckdcm kfm kfm kmf mkf mkf mkf mfk mfk mfk mkf mfmkn "
        />
        <TaskCard
          status={"ldmd"}
          color={{ r: 255, g: 0, b: 255 }}
          name="mvkvm"
          tag={["djnjdn", "djdmc"]}
          id={"dkcmckd"}
          description="kdnckdckdkdckdcm kfm kfm kmf mkf mkf mkf mfk mfk mfk mkf mfmkn "
        />
        <TaskCard
          status={"ldmd"}
          color={{ r: 255, g: 0, b: 255 }}
          name="mvkvm"
          tag={["djnjdn", "djdmc"]}
          id={"dkcmckd"}
          description="kdnckdckdkdckdcm kfm kfm kmf mkf mkf mkf mfk mfk mfk mkf mfmkn "
        />
        <TaskCard
          status={"ldmd"}
          color={{ r: 255, g: 0, b: 255 }}
          name="mvkvm"
          tag={["djnjdn", "djdmc"]}
          id={"dkcmckd"}
          description="kdnckdckdkdckdcm kfm kfm kmf mkf mkf mkf mfk mfk mfk mkf mfmkn "
        />
      </ColumnCard>
    </div>
  );
}

export default App;
