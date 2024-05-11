import React, { Children, useEffect } from "react";
import "./style.scss";
import { ColumnsWithTasksList, CreateAndFilterForm } from "../../../Widgets";
import { useAppDispatch } from "../../../Shared";
import { getAllColumnActionCreator } from "../../../Entities/Column";
import { getAllTaskActionCreator } from "../../../Entities/Task";
import { ColumnCardWrap } from "../../../Features/ColumnCardWrap/ui";
import TaskCard from "../../../Entities/Task/Model/Ui/TaskCard/ui";
import { TaskCardWrap } from "../../../Features/TaskCardWrap/ui";

export const MainPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllColumnActionCreator());
    dispatch(getAllTaskActionCreator());
  }, []);

  return (
    <main className="mainPage">
      <CreateAndFilterForm />
      {/* <ColumnsWithTasksList /> */}
      <ColumnCardWrap name="Kosoom Elsisi" id="df" color={{ r: 255, g: 255, b: 0 }} position="1">
        {[
        <TaskCardWrap name="kjkjklj" id="k" description="kjlfsk" status="sdf" tags={["sdf"]}/>,
        <TaskCardWrap name="kjkjklj" id="kd" description="kjlfsk" status="sdf" tags={["sdf"]}  />,
        <TaskCardWrap name="kjkjklj" id="ks" description="kjlfsk" status="sdf" tags={["sdf"]} />
      ] }
        
      </ColumnCardWrap>

    </main>
  );
};
