import React from "react";
import { TaskItem } from "../../Model/type";
import { TaskForm } from "../TaskForm/ui";
import { useAppDispatch } from "../../../../Shared";
import { updateTaskActionCreator } from "../../Store/actionCreators";

interface UpdateTaskFormProps {
  taskItem: TaskItem;
  onClickSaveBtn?: (v?: TaskItem) => void;
  onClickCanselBtn?: () => void;
}
export const UpdateTaskForm = ({
  taskItem,
  onClickSaveBtn,
  onClickCanselBtn,
}: UpdateTaskFormProps) => {
  const dispatch = useAppDispatch();
  const saveFunc = async (item: TaskItem) => {
    dispatch(updateTaskActionCreator(item));
    if (onClickSaveBtn) onClickSaveBtn(item);
  };

  return (
    <TaskForm
      name="Update Task"
      saveFunc={saveFunc}
      initialTaskItem={taskItem}
      canselFunc={() => {
        if (onClickCanselBtn) onClickCanselBtn();
      }}
    />
  );
};
