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
    const itemThatComesAfterInNewPlace = columnsList.find((column) => {
      return column.position === item.position;
    });
    const itemThatComesAfterInOldPlace = columnsList.find((column) => {
      return column.position === columnItem.position;
    });
    dispatch(updateColumnActionCreator(item));
    if (itemThatComesAfterInNewPlace) {
      dispatch(
        updateColumnActionCreator({
          ...itemThatComesAfterInNewPlace,
          position: item.name,
        })
      );
    }
    if (itemThatComesAfterInOldPlace) {
      dispatch(
        updateColumnActionCreator({
          ...itemThatComesAfterInOldPlace,
          position: columnItem.position,
        })
      );
    }
    if (onClickSaveBtn) onClickSaveBtn(item);
  };

  const nameColumnsList = columnsList.map((column) => {
    return column.name;
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
