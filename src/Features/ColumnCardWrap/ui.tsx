import React, { useState } from "react";
import ColumnCard from "../../Entities/Column/UI/ColumnCard/ui";
import { Modal } from "../../Shared/UI/Modal/ui";

interface ColumnCardWrapProps extends ColumnItem {
  children: JSX.Element[];
}
export const ColumnCardWrap = ({ children, ...props }: ColumnCardWrapProps) => {
  // const dispatch = useAppDispatch();
  // 
  //  const ColumnsState = useAppSelector((state) => state.ColumnsReducer);
   const [ShowUpdateColumn, setShowUpdateColumn] = useState<boolean>(false);
   const [ShowCreateTask, setShowCreateTask] = useState<boolean>(false);
  return (
    <div>
      <ColumnCard {...props} 
      editFun={() => { setShowUpdateColumn(true) }} 
      deleteFun={() => {  }} 
      addFun={() => { setShowCreateTask(true) }}>
        {children}
      </ColumnCard>
      <Modal setIsShow={setShowUpdateColumn} isShow={ShowUpdateColumn}>
        {ShowUpdateColumn && (
          // <UpdateColumnForm
          //   columnsList={ColumnsState.columns}
          //   onClickSaveBtn={() => {
          //     setShowCreateColumn(false);
          //   }}
          //   onClickCanselBtn={() => {
          //     setShowCreateColumn(false);
          //   }}
          // />
        )}
      </Modal>
      <Modal setIsShow={setShowUpdateColumn} isShow={ShowCreateTask}>
        {ShowCreateTask && (
          // <CreateTaskForm
          //   onClickSaveBtn={() => {
          //     setShowCreateColumn(false);
          //   }}
          //   onClickCanselBtn={() => {
          //     setShowCreateColumn(false);
          //   }}
          // />
        )}
      </Modal>
    </div>
  );
};
