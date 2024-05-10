import React from "react";
import "./style.scss";
import { ColumnForm } from "../ColumnForm/ui";
import { ColumnItem } from "../../Model/type";
import { useAppDispatch } from "../../../../Shared";
import {
  createColumnActionCreator,
  updateColumnActionCreator,
} from "../../Store/actionCreator";

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
    const itemThatComesAfter = columnsList.find((column) => {
      return column.position === item.position;
    });
    dispatch(createColumnActionCreator(item));
    if (itemThatComesAfter)
      dispatch(
        updateColumnActionCreator({
          ...itemThatComesAfter,
          position: item.name,
        })
      );
    if (onClickSaveBtn) onClickSaveBtn(item);
  };

  const nameColumnsList = columnsList.map((column) => {
    return column.name;
  });
  return (
    <ColumnForm
      name="Create Column"
      nameColumnsList={nameColumnsList}
      saveFunc={saveFunc}
      canselFunc={() => {
        if (onClickCanselBtn) onClickCanselBtn();
      }}
    />
  );
};
