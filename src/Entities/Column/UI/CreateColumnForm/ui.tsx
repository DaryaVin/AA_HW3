import React from "react";
import "./style.scss";
import { ColumnForm } from "../ColumnForm/ui";
import { ColumnItem } from "../../Model/type";
import { useAppDispatch } from "../../../../Shared";
import { createColumnActionCreator } from "../../Store/actionCreator";

interface CreateColumnFormProps {
  onClickSaveBtn?: (v?: ColumnItem) => void;
  onClickCanselBtn?: () => void;
  columnsList: ColumnItem[];
}
export const CreateColumnForm = ({
  columnsList,
  onClickSaveBtn,
  onClickCanselBtn,
}: CreateColumnFormProps) => {
  const dispatch = useAppDispatch();

  const saveFunc = async (item: ColumnItem) => {
    dispatch(createColumnActionCreator(item, columnsList));
    if (onClickSaveBtn) onClickSaveBtn(item);
  };
  return (
    <ColumnForm
      name="Create Column"
      columnsList={columnsList}
      saveFunc={saveFunc}
      canselFunc={() => {
        if (onClickCanselBtn) onClickCanselBtn();
      }}
    />
  );
};
