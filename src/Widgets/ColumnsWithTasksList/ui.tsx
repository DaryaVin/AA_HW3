import React from "react";
import { useAppSelector } from "../../Shared";
import { ColumnItem } from "../../Entities/Column";
import { ColumnCardWrap, TaskCardWrap } from "../../Features";

export const ColumnsWithTasksList = () => {
  const ColumnsState = useAppSelector((state) => state.ColumnsReducer);
  const TasksState = useAppSelector((state) => state.TasksReducer);

  const sortColumns = (columnsList: ColumnItem[]) => {
    const copyColumnsList = [...columnsList];
    const sortColumnList: ColumnItem[] = [];
    let currentPosition = "";

    while (copyColumnsList.length !== 0) {
      const indexColumnWithCurrentPosition = copyColumnsList.findIndex(
        (column) => column.position === currentPosition
      );
      if (indexColumnWithCurrentPosition < 0) break;

      sortColumnList.push(copyColumnsList[indexColumnWithCurrentPosition]);
      currentPosition = copyColumnsList[indexColumnWithCurrentPosition].id;
      copyColumnsList.splice(indexColumnWithCurrentPosition, 1);
    }
    return sortColumnList;
  };

  const filterColumns = (columnsList: ColumnItem[]) => {
    if (ColumnsState.filter)
      return columnsList.filter((column) => {
        return column.name
          .toLocaleLowerCase()
          .includes(ColumnsState.filter.toLocaleLowerCase());
      });
    return columnsList;
  };

  if (ColumnsState.isLoading) {
    return <div>Loading...</div>;
  } else {
    if (ColumnsState.error) {
      return (
        <div>
          <p>An error occurred while loading columns, try reloading the page</p>
          <p>{ColumnsState.error}</p>
        </div>
      );
    }
    return (
      <ul>
        {filterColumns(ColumnsState.columns).length !== 0 ? (
          filterColumns(sortColumns(ColumnsState.columns)).map((column) => {
            return (
              <li key={column.id}>
                <ColumnCardWrap ColumnItem={column}>
                  {TasksState.tasks
                    .filter((task) => task.idColumn === column.id)
                    .map((task) => {
                      return (
                        <li key={task.id}>
                          <TaskCardWrap TaskItem={task} color={column.color} />
                        </li>
                      );
                    })}
                </ColumnCardWrap>
              </li>
            );
          })
        ) : ColumnsState.filter ? (
          <span>No columns were found by your filter</span>
        ) : (
          <span>There are no columns yet, create at least one</span>
        )}
      </ul>
    );
  }
};
