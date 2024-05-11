import React from "react";
import { createTaskActionCreator } from "../../Store/actionCreators";
import { TaskForm } from "../TaskForm/ui";
import { TaskItem } from "../../Model/type";
import { useAppDispatch } from "../../../../Shared";

interface CreateTaskFormProps {
  status: string;
  idColumn: string;
  onClickSaveBtn?: (v?: TaskItem) => void;
  onClickCanselBtn?: () => void;
}
export const CreateTaskForm = ({
  status,
  idColumn,
  onClickSaveBtn,
  onClickCanselBtn,
}: CreateTaskFormProps) => {
  const dispatch = useAppDispatch();

  const saveFunc = async (item: TaskItem) => {
    dispatch(createTaskActionCreator(item));
    if (onClickSaveBtn) onClickSaveBtn(item);
  };

  return (
    <TaskForm
      name="Create Task"
      idColumn={idColumn}
      status={status}
      saveFunc={saveFunc}
      canselFunc={() => {
        if (onClickCanselBtn) onClickCanselBtn();
      }}
    />
  );
};
