import { AppDispatch } from "../../../Shared";
import { api } from "../API/api";
import { TaskItem } from "../Model/type";
import { TasksSlice } from "./slice";

export const getAllTaskActionCreator = () => async (dispatch: AppDispatch) => {
  const { onLoadAllTasks, onLoadAllTasksSucces, onLoadAllTasksError } =
    TasksSlice.actions;
  try {
    dispatch(onLoadAllTasks());

    const result = await api.getList();
    if (result.success === true) {
      if (result.data) dispatch(onLoadAllTasksSucces(result.data));
    } else {
      dispatch(onLoadAllTasksError(result.error));
    }
  } catch (error) {
    dispatch(onLoadAllTasksError(typeof error === "string" ? error : "error"));
  }
};

export const createTaskActionCreator =
  (task: TaskItem) => async (dispatch: AppDispatch) => {
    const { onCreateTask, onCreateTaskSucces, onCreateTaskError } =
      TasksSlice.actions;
    try {
      dispatch(onCreateTask());

      const result = await api.create(task);
      if (result.success === true) {
        if (result.data) dispatch(onCreateTaskSucces(result.data));
      } else {
        dispatch(onCreateTaskError(result.error));
      }
    } catch (error) {
      dispatch(onCreateTaskError(typeof error === "string" ? error : "error"));
    }
  };

export const updateTaskActionCreator =
  (task: TaskItem) => async (dispatch: AppDispatch) => {
    const { onUpdateTask, onUpdateTaskSucces, onUpdateTaskError } =
      TasksSlice.actions;
    try {
      dispatch(onUpdateTask());

      const result = await api.update(task, task.id);
      if (result.success === true) {
        if (result.data) dispatch(onUpdateTaskSucces(result.data));
      } else {
        dispatch(onUpdateTaskError(result.error));
      }
    } catch (error) {
      dispatch(onUpdateTaskError(typeof error === "string" ? error : "error"));
    }
  };

export const deleteTaskActionCreator =
  (task: TaskItem) => async (dispatch: AppDispatch) => {
    const { onDeleteTask, onDeleteTaskSucces, onDeleteTaskError } =
      TasksSlice.actions;
    try {
      dispatch(onDeleteTask());

      const result = await api.delete(task.id);
      if (result.success === true) {
        dispatch(onDeleteTaskSucces(task.id));
      } else {
        dispatch(onDeleteTaskError(result.error));
      }
    } catch (error) {
      dispatch(onDeleteTaskError(typeof error === "string" ? error : "error"));
    }
  };
