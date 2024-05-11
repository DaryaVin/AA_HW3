import React, { useState } from "react";
import ColumnCard from "../../Entities/Column/UI/ColumnCard/ui";
import { Modal } from "../../Shared/UI/Modal/ui";
import { ColumnItem, deleteColumnActionCreator } from "../../Entities/Column";
import { useAppDispatch, useAppSelector } from "../../Shared";
import { UpdateColumnForm } from "../../Entities/Column";
import { CreateTaskForm, deleteTaskActionCreator } from "../../Entities/Task";

interface ColumnCardWrapProps {
  children: JSX.Element[];
  ColumnItem: ColumnItem;
}
export const ColumnCardWrap = ({
  children,
  ColumnItem,
}: ColumnCardWrapProps) => {
  const dispatch = useAppDispatch();
  //
  const ColumnsState = useAppSelector((state) => state.ColumnsReducer);
  const TasksState = useAppSelector((state) => state.TasksReducer);

  const [ShowUpdateColumn, setShowUpdateColumn] = useState<boolean>(false);
  const [ShowCreateTask, setShowCreateTask] = useState<boolean>(false);

  return (
    <>
      <ColumnCard
        color={ColumnItem.color}
        name={ColumnItem.name}
        position={ColumnItem.position}
        id={ColumnItem.id}
        editFun={() => {
          setShowUpdateColumn(true);
        }}
        deleteFun={() => {
          dispatch(deleteColumnActionCreator(ColumnItem, ColumnsState.columns));
          TasksState.tasks.forEach((task) => {
            if (task.idColumn === ColumnItem.id) {
              dispatch(deleteTaskActionCreator(task));
            }
          });
        }}
        addFun={() => {
          setShowCreateTask(true);
        }}
      >
        {children}
      </ColumnCard>

      <Modal setIsShow={setShowUpdateColumn} isShow={ShowUpdateColumn}>
        {ShowUpdateColumn && (
          <UpdateColumnForm
            columnItem={ColumnItem}
            columnsList={ColumnsState.columns}
            onClickSaveBtn={() => {
              setShowUpdateColumn(false);
            }}
            onClickCanselBtn={() => {
              setShowUpdateColumn(false);
            }}
          />
        )}
      </Modal>
      <Modal setIsShow={setShowCreateTask} isShow={ShowCreateTask}>
        {ShowCreateTask && (
          <CreateTaskForm
            idColumn={ColumnItem.id}
            status={ColumnItem.name}
            onClickSaveBtn={() => {
              setShowCreateTask(false);
            }}
            onClickCanselBtn={() => {
              setShowCreateTask(false);
            }}
          />
        )}
      </Modal>
    </>
  );
};
