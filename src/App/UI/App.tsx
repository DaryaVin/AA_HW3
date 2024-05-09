import React from "react";
import "./App.css";
import ColumnCard from "../../Entities/Column/UI/ColumnCard/ui";
import TaskCard from "../../Entities/Task/Model/TaskCard/ui";

function App() {
  return (
    <div className="App">
      {/* <Status statusTask="fnvjfjvnfjvn" color="red" /> */}
      <ColumnCard color={"red"} name={"kdckdmvkd"} position={1} id={"dnckdmnc"}>
        <TaskCard
          status={"ldmd"}
          color={"red"}
          name="mvkvm"
          tag={["djnjdn", "djdmc"]}
          id={"dkcmckd"}
          description="kdnckdckdkdckdcm kfm kfm kmf mkf mkf mkf mfk mfk mfk mkf mfmkn "
        />
        <TaskCard
          status={"ldmd"}
          color={"red"}
          name="mvkvm"
          tag={["djnjdn", "djdmc"]}
          id={"dkcmckd"}
          description="kdnckdckdkdckdcm kfm kfm kmf mkf mkf mkf mfk mfk mfk mkf mfmkn "
        />
        <TaskCard
          status={"ldmd"}
          color={"red"}
          name="mvkvm"
          tag={["djnjdn", "djdmc"]}
          id={"dkcmckd"}
          description="kdnckdckdkdckdcm kfm kfm kmf mkf mkf mkf mfk mfk mfk mkf mfmkn "
        />
        <TaskCard
          status={"ldmd"}
          color={"red"}
          name="mvkvm"
          tag={["djnjdn", "djdmc"]}
          id={"dkcmckd"}
          description="kdnckdckdkdckdcm kfm kfm kmf mkf mkf mkf mfk mfk mfk mkf mfmkn "
        />
        <TaskCard
          status={"ldmd"}
          color={"red"}
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
