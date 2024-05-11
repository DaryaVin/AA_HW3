import { AppDispatch } from "../../../Shared";
import { api } from "../API/api";
import { ColumnItem } from "../Model/type";
import { ColumnsSlice } from "./slice";

const fetchUpdate = async (column: ColumnItem, dispatch: AppDispatch) => {
  const { onUpdateColumn, onUpdateColumnSucces, onUpdateColumnError } =
    ColumnsSlice.actions;
  try {
    dispatch(onUpdateColumn());
    const result = await api.update(column, column.id);
    if (result.success === true) {
      if (result.data) dispatch(onUpdateColumnSucces(result.data));
    } else {
      dispatch(onUpdateColumnError(result.error));
    }
  } catch (error) {
    dispatch(onUpdateColumnError(typeof error === "string" ? error : "error"));
  }
};

export const getAllColumnActionCreator =
  () => async (dispatch: AppDispatch) => {
    const { onLoadAllColumns, onLoadAllColumnsSucces, onLoadAllColumnsError } =
      ColumnsSlice.actions;
    try {
      dispatch(onLoadAllColumns());

      const result = await api.getList();
      if (result.success === true) {
        if (result.data) dispatch(onLoadAllColumnsSucces(result.data));
      } else {
        dispatch(onLoadAllColumnsError(result.error));
      }
    } catch (error) {
      dispatch(
        onLoadAllColumnsError(typeof error === "string" ? error : "error")
      );
    }
  };

export const createColumnActionCreator =
  (column: ColumnItem, columnsList: ColumnItem[]) =>
  async (dispatch: AppDispatch) => {
    const { onCreateColumn, onCreateColumnSucces, onCreateColumnError } =
      ColumnsSlice.actions;
    try {
      dispatch(onCreateColumn());

      const result = await api.create(column);
      if (result.success === true) {
        if (result.data) {
          const newColumn = result.data;
          dispatch(onCreateColumnSucces(newColumn));

          const itemThatComesAfter = columnsList.find((item) => {
            return item.position === column.position;
          });
          if (itemThatComesAfter) {
            fetchUpdate(
              {
                ...itemThatComesAfter,
                position: newColumn.id,
              },
              dispatch
            );
          }
        }
      } else {
        dispatch(onCreateColumnError(result.error));
      }
    } catch (error) {
      dispatch(
        onCreateColumnError(typeof error === "string" ? error : "error")
      );
    }
  };

export const updateColumnActionCreator =
  (oldColumn: ColumnItem, newColumn: ColumnItem, columnsList: ColumnItem[]) =>
  async (dispatch: AppDispatch) => {
    fetchUpdate(newColumn, dispatch);
    if (oldColumn.position !== newColumn.position) {
      const columnThatComesAfterInNewPlace = columnsList.find((column) => {
        return column.position === newColumn.position;
      });
      const columnThatComesAfterInOldPlace = columnsList.find((column) => {
        return column.position === oldColumn.id;
      });

      if (columnThatComesAfterInNewPlace) {
        fetchUpdate(
          { ...columnThatComesAfterInNewPlace, position: newColumn.id },
          dispatch
        );
      }
      if (columnThatComesAfterInOldPlace) {
        fetchUpdate(
          { ...columnThatComesAfterInOldPlace, position: oldColumn.position },
          dispatch
        );
      }
    }
  };

export const deleteColumnActionCreator =
  (column: ColumnItem, columnsList: ColumnItem[]) =>
  async (dispatch: AppDispatch) => {
    const { onDeleteColumn, onDeleteColumnSucces, onDeleteColumnError } =
      ColumnsSlice.actions;

    const columnThatComesAfter = columnsList.find((item) => {
      return item.position === column.id;
    });

    try {
      dispatch(onDeleteColumn());

      const result = await api.delete(column.id);
      if (result.success === true) {
        dispatch(onDeleteColumnSucces(column.id));
        if (columnThatComesAfter) {
          fetchUpdate(
            { ...columnThatComesAfter, position: column.position },
            dispatch
          );
        }
      } else {
        dispatch(onDeleteColumnError(result.error));
      }
    } catch (error) {
      dispatch(
        onDeleteColumnError(typeof error === "string" ? error : "error")
      );
    }
  };

export const changeColumnFilter =
  (filterText: string) => (dispatch: AppDispatch) => {
    const { onChangeFilter } = ColumnsSlice.actions;
    dispatch(onChangeFilter(filterText));
  };
