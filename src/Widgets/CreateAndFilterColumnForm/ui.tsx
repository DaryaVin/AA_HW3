import React, { useState } from "react";
import "./style.scss";
import {
  Button,
  Input,
  Modal,
  useAppDispatch,
  useAppSelector,
} from "../../Shared";
import { CreateColumnForm } from "../../Entities/Column";
import { changeColumnFilter } from "../../Entities/Column/Store/actionCreator";

export const CreateAndFilterForm = () => {
  const dispatch = useAppDispatch();
  const ColumnsState = useAppSelector((state) => state.ColumnsReducer);

  const [ShowCreateColumn, setShowCreateColumn] = useState<boolean>(false);

  return (
    <form className="createAndFilterForm">
      <Input
        label="Filter Column"
        value={ColumnsState.filter}
        setValue={(v) => {
          dispatch(changeColumnFilter(v));
        }}
      />
      <Button
        title="Create Column"
        theme="roundWithPlus"
        onClick={() => {
          setShowCreateColumn(true);
        }}
      >
        Create Column
      </Button>
      <Modal setIsShow={setShowCreateColumn} isShow={ShowCreateColumn}>
        {ShowCreateColumn && (
          <CreateColumnForm
            columnsList={ColumnsState.columns}
            onClickSaveBtn={() => {
              setShowCreateColumn(false);
            }}
            onClickCanselBtn={() => {
              setShowCreateColumn(false);
            }}
          />
        )}
      </Modal>
    </form>
  );
};
