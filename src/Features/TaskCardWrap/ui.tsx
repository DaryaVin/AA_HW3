import React, { useState } from "react";
import { Modal } from "../../Shared/UI/Modal/ui";
import { UpdateTaskForm } from "../../Entities/Task";
import { TaskItem } from "../../Entities/Task/Model/type";
import TaskCard from "../../Entities/Task/Model/Ui/TaskCard/ui";
import { deleteTaskActionCreator } from "../../Entities/Task/Store/actionCreators";
import { useAppDispatch } from "../../Shared";

interface TaskCardWrapProps {
  TaskItem: TaskItem;
  color: {
    r: number;
    g: number;
    b: number;
  };
}
export const TaskCardWrap = ({ TaskItem, color }: TaskCardWrapProps) => {
  const dispatch = useAppDispatch();

  const [ShowUpdateTask, setShowUpdateTask] = useState<boolean>(false);

  return (
    <>
      <TaskCard
        {...TaskItem}
        color={color}
        editFun={() => {
          setShowUpdateTask(true);
        }}
        deleteFun={() => {
          dispatch(deleteTaskActionCreator(TaskItem));
        }}
      />

      <Modal setIsShow={setShowUpdateTask} isShow={ShowUpdateTask}>
        {ShowUpdateTask && (
          <UpdateTaskForm
            taskItem={TaskItem}
            onClickSaveBtn={() => {
              setShowUpdateTask(false);
            }}
            onClickCanselBtn={() => {
              setShowUpdateTask(false);
            }}
          />
        )}
      </Modal>
    </>
  );
};
