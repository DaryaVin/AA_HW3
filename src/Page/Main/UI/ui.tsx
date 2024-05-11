import React, { useEffect } from "react";
import "./style.scss";
import { useAppDispatch } from "../../../Shared";
import { getAllColumnActionCreator } from "../../../Entities/Column";
import { getAllTaskActionCreator } from "../../../Entities/Task";
import { ColumnsWithTasksList, CreateAndFilterForm } from "../../../Widgets";

export const MainPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllColumnActionCreator());
    dispatch(getAllTaskActionCreator());
  }, []);

  return (
    <main className="mainPage">
      <CreateAndFilterForm />
      <ColumnsWithTasksList />
      {/* <ColumnCardWrap
        ColumnItem={{
          name: "Kosoom Elsisi",
          id: "df",
          color: { r: 255, g: 255, b: 0 },
          position: "1",
        }}
      >
        <TaskCardWrap
          color={{ r: 255, g: 255, b: 0 }}
          TaskItem={{
            name: "kjkjklj",
            id: "k",
            description: "kjlfsk",
            status: "sdf",
            tags: ["sdf"],
          }}
        />
        <TaskCardWrap
          color={{ r: 255, g: 255, b: 0 }}
          TaskItem={{
            name: "kjkjklj",
            id: "k",
            description: "kjlfsk",
            status: "sdf",
            tags: ["sdf"],
          }}
        />
        <TaskCardWrap
          color={{ r: 255, g: 255, b: 0 }}
          TaskItem={{
            name: "kjkjklj",
            id: "k",
            description: "kjlfsk",
            status: "sdf",
            tags: ["sdf"],
          }}
        />
      </ColumnCardWrap> */}
    </main>
  );
};
