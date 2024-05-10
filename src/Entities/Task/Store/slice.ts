import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskItem } from "../Model/type";

interface initialStateProps {
  tasks: TaskItem[];
  isLoading: boolean;
  error: string | null;
}
const initialState: initialStateProps = {
  tasks: [],
  isLoading: false,
  error: null,
};

export const TasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    onLoadAllTasks(state) {
      state.isLoading = true;
    },
    onLoadAllTasksSucces(state, action: PayloadAction<TaskItem[]>) {
      state.isLoading = false;
      state.error = null;
      state.tasks = action.payload;
    },
    onLoadAllTasksError(state, action: PayloadAction<string | null>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // --------------------------------------------------------------------------------
    onCreateTask(state) {
      state.isLoading = true;
    },
    onCreateTaskSucces(state, action: PayloadAction<TaskItem>) {
      state.isLoading = false;
      state.error = null;
      state.tasks.push(action.payload);
    },
    onCreateTaskError(state, action: PayloadAction<string | null>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // ---------------------------------------------------------------------------------
    onUpdateTask(state) {
      state.isLoading = true;
    },
    onUpdateTaskSucces(state, action: PayloadAction<TaskItem>) {
      state.isLoading = false;
      state.error = null;

      state.tasks = state.tasks.map((task) => {
        return task.id === action.payload.id ? action.payload : task;
      });
    },
    onUpdateTaskError(state, action: PayloadAction<string | null>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // ----------------------------------------------------------------------------------
    onDeleteTask(state) {
      state.isLoading = true;
    },
    onDeleteTaskSucces(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = null;
      state.tasks = state.tasks.filter((task) => {
        return task.id !== action.payload;
      });
    },
    onDeleteTaskError(state, action: PayloadAction<string | null>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default TasksSlice.reducer;
