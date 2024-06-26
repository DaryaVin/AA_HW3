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
    </main>
  );
};
