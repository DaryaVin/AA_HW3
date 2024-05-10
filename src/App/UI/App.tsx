import React from "react";
import "./App.css";
import ColumnCard from "../../Entities/Column/UI/ColumnCard/ui";
import TaskCard from "../../Entities/Task/Model/Ui/TaskCard/ui";

function App() {
  return (
    <div className="App">
      <ColumnCard 
        color={{ r: 255, g: 255, b: 0 }}
        name={"Done"} 
        position={1} 
        id={"dnckdmnc"}
        editFun={() => {
          console.log("Kossom Elsisi col")
        }}
        deleteFun={() => {
          console.log("Kossom Elsisi col 2")
        }}
        addFun={() => {
          console.log("KOSSOM ELSISI")
        }}
        >
        <TaskCard
          status={"Done"}
          color={{ r: 255, g: 0, b: 255 }}
          name="Kossom Elsisi"
          tag={["Kossom Elsisi", "Kossom Elsisi", "Kossom Elsisi","Kossom Elsisi",]}
          id={"1"}
          description="Kossom Elsisi Kossom Elsisi Kossom Elsisi Kossom Elsisi Kossom Elsisi Kossom Elsisi Kossom Elsisi "
          deleteFun={()=> {
            console.log("Kossom Elsisi");
          }}
          editFun={() => {
            console.log("Kossom Elsisi 2")
          }}
          />
        <TaskCard
          status={"ldmd"}
          color={{ r: 255, g: 0, b: 255 }}
          name="mvkvm"
          tag={["djnjdn", "djdmc"]}
          id={"2"}
          description="kdnckdckdkdckdcm kfm kfm kmf mkf mkf mkf mfk mfk mfk mkf mfmkn "
          deleteFun={()=> {
            console.log("Kossom Elsisi");
          }}
          editFun={() => {
            console.log("Kossom Elsisi 2")
          }}
          />
        <TaskCard
          status={"ldmd"}
          color={{ r: 255, g: 0, b: 255 }}
          name="mvkvm"
          tag={["djnjdn", "djdmc"]}
          id={"3"}
          description="kdnckdckdkdckdcm kfm kfm kmf mkf mkf mkf mfk mfk mfk mkf mfmkn "
          deleteFun={()=> {
            console.log("Kossom Elsisi");
          }}
          editFun={() => {
            console.log("Kossom Elsisi 2")
          }}
          />
      </ColumnCard>

      <ColumnCard 
      color={{ r: 255, g: 0, b: 255 }} 
      name={"Done"} 
      position={2} 
      id={"two"}
      editFun={() => {
        console.log("Kossom Elsisi col")
      }}
      deleteFun={() => {
        console.log("Kossom Elsisi col 2")
      }}
      addFun={() => {
        console.log("KOSSOM ELSISI")
      }}
      >
        <TaskCard
          status={"Done"}
          color={{ r: 255, g: 0, b: 255 }}
          name="Kossom Elsisi"
          tag={["Kossom Elsisi", "Kossom Elsisi"]}
          id={"dkcmckd"}
          description="Kossom Elsisi Kossom Elsisi Kossom Elsisi Kossom Elsisi Kossom Elsisi Kossom Elsisi Kossom Elsisi "
          deleteFun={()=> {
            console.log("Kossom Elsisi");
          }}
          editFun={() => {
            console.log("Kossom Elsisi 2")
          }}
          />
        <TaskCard
          status={"ldmd"}
          color={{ r: 255, g: 0, b: 255 }}
          name="mvkvm"
          tag={["djnjdn", "djdmc"]}
          id={"dkcmckd"}
          description="kdnckdckdkdckdcm kfm kfm kmf mkf mkf mkf mfk mfk mfk mkf mfmkn "
          deleteFun={()=> {
            console.log("Kossom Elsisi");
          }}
          editFun={() => {
            console.log("Kossom Elsisi 2")
          }}
          />
        <TaskCard
          status={"ldmd"}
          color={{ r: 255, g: 0, b: 255 }}
          name="mvkvm"
          tag={["djnjdn", "djdmc"]}
          id={"dkcmckd"}
          description="kdnckdckdkdckdcm kfm kfm kmf mkf mkf mkf mfk mfk mfk mkf mfmkn "
          deleteFun={()=> {
            console.log("Kossom Elsisi");
          }}
          editFun={() => {
            console.log("Kossom Elsisi 2")
          }}
          />
      </ColumnCard>
    </div>
  );
}

export default App;
