import React, { useState,  } from "react";
import ColumnCard from "../../Entities/Column/UI/ColumnCard/ui";
import { Modal } from "../../Shared/UI/Modal/ui";
import {ColumnItem} from "../../Entities/Column";
import { useAppDispatch, useAppSelector } from "../../Shared";
import { UpdateColumnForm } from "../../Entities/Column";
import { CreateTaskForm } from "../../Entities/Task";

interface ColumnCardWrapProps extends ColumnItem {
  children: JSX.Element[];
}
export const ColumnCardWrap = ({ children, ...props }: ColumnCardWrapProps) => {
  const dispatch = useAppDispatch();
  // 
  const ColumnsState = useAppSelector((state) => state.ColumnsReducer);

  const [ShowUpdateColumn, setShowUpdateColumn] = useState<boolean>(false);
  const [ShowCreateTask, setShowCreateTask] = useState<boolean>(false);

  return (
    <>
      <ColumnCard  
        color={{ r: 0, g: 255, b: 0 }}
        name={"Done"} 
        position='1'
        id={"dnckdmnc"}
        editFun={() => { setShowUpdateColumn(true) }} 
        deleteFun={() => { console.log("dsfsdf") }}
        addFun={() => { setShowCreateTask(true) }}
        >
          {children}
      </ColumnCard>

      <Modal setIsShow={setShowUpdateColumn} isShow={ShowUpdateColumn}>
        {ShowUpdateColumn && (
          <UpdateColumnForm
              columnItem={{
                id: "",
                name: "",
                position: "",
                color: { r: 0, g: 0, b: 0 },
              }}
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
            status=""
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
