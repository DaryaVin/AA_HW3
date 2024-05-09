import React from "react";
import { TaskForm } from "../TaskForm/ui";
import { TaskItem } from "../../Model/type";
import { api } from "../../API/api";

interface CreateTaskFormProps {
  status: string;
}
export const CreateTaskForm = ({ status }: CreateTaskFormProps) => {
  const saveFunc = (item: TaskItem) => {
    api.create(item);
  };
  return (
    <TaskForm
      name="Create Task"
      status={status}
      saveFunc={saveFunc}
      canselFunc={() => {
        console.log("canselFunc");
      }}
    />
  );
};
