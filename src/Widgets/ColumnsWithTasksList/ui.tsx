import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Shared";
import { ColumnItem } from "../../Entities/Column";
import { ColumnCardWrap, TaskCardWrap } from "../../Features";
import { TaskItem } from "../../Entities/Task/Model/type";
import { updateTaskActionCreator } from "../../Entities/Task/Store/actionCreators";

export const ColumnsWithTasksList = () => {
  const ColumnsState = useAppSelector((state) => state.ColumnsReducer);
  const TasksState = useAppSelector((state) => state.TasksReducer);
  const dispatch = useAppDispatch();

  const [currentDragTask, setCurrentDragTask] = useState<TaskItem>();
  const [currentDragColumn, setCurrentDragColumn] = useState<ColumnItem>();
  const [currentDragColumnElement, setCurrentDragColumnElement] =
    useState<Element>();

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

    const onDragEndTask = () => {
      if (currentDragColumnElement instanceof Element) {
        currentDragColumnElement.setAttribute("style", "transform: scale(1);");
      }
      if (currentDragTask && currentDragColumn) {
        dispatch(
          updateTaskActionCreator({
            ...currentDragTask,
            status: currentDragColumn.name,
            idColumn: currentDragColumn.id,
          })
        );
      }
    };

    const onDragOverTask = (
      e: React.DragEvent<HTMLLIElement>,
      column: ColumnItem
    ) => {
      e.preventDefault();
      if (e.currentTarget instanceof Element && e.target instanceof Element) {
        e.currentTarget.setAttribute("style", "transform: scale(1.1);");

        if (
          currentDragColumnElement &&
          e.currentTarget !== currentDragColumnElement
        ) {
          currentDragColumnElement.setAttribute(
            "style",
            "transform: scale(1);"
          );
        }
        setCurrentDragColumnElement(e.currentTarget);
        setCurrentDragColumn(column);
      }
    };

    return (
      <ul className="all-cards">
        {filterColumns(ColumnsState.columns).length !== 0 ? (
          filterColumns(sortColumns(ColumnsState.columns)).map((column) => {
            return (
              <li
                className="ColumnsWithTasksList__columnItem"
                key={column.id}
                onDragOver={(e) => {
                  onDragOverTask(e, column);
                }}
                onDragEnd={() => {
                  onDragEndTask();
                }}
              >
                <ColumnCardWrap ColumnItem={column}>
                  {TasksState.tasks
                    .filter((task) => task.idColumn === column.id)
                    .map((task) => {
                      return (
                        <li
                          key={task.id}
                          draggable
                          onDragStart={() => {
                            setCurrentDragTask(task);
                          }}
                        >
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
