import React from "react";
import { ColumnItem } from "../../Model/type";
import { ColumnForm } from "../ColumnForm/ui";
import { useAppDispatch } from "../../../../Shared";
import { updateColumnActionCreator } from "../../Store/actionCreator";

interface UpdateColumnFormProps {
  columnItem: ColumnItem;
  onClickSaveBtn?: (v?: ColumnItem) => void;
  onClickCanselBtn?: () => void;
  columnsList: ColumnItem[];
}
export const UpdateColumnForm = ({
  columnItem,
  onClickSaveBtn,
  onClickCanselBtn,
  columnsList,
}: UpdateColumnFormProps) => {
  const dispatch = useAppDispatch();
  const saveFunc = async (item: ColumnItem) => {
    dispatch(updateColumnActionCreator(columnItem, item, columnsList));
    if (onClickSaveBtn) onClickSaveBtn(item);
  };

  const nameColumnsList = columnsList
    .filter((column) => {
      return column.id !== columnItem.id;
    })
    .map((column) => {
      return column.id;
    });

  return (
    <ColumnForm
      name="Update Column"
      saveFunc={saveFunc}
      initialColumnItem={columnItem}
      nameColumnsList={nameColumnsList}
      canselFunc={() => {
        if (onClickCanselBtn) onClickCanselBtn();
      }}
    />
  );
};
