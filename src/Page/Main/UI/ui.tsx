import React, { useEffect } from "react";
import "./style.scss";
import { ColumnsWithTasksList, CreateAndFilterForm } from "../../../Widgets";
import { useAppDispatch } from "../../../Shared";
import { getAllColumnActionCreator } from "../../../Entities/Column";
import { getAllTaskActionCreator } from "../../../Entities/Task";

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
