import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ColumnItem } from "../Model/type";

interface initialStateProps {
  columns: ColumnItem[];
  isLoading: boolean;
  error: string | null;
  filter: string;
}
const initialState: initialStateProps = {
  columns: [],
  isLoading: false,
  error: null,
  filter: "",
};

export const ColumnsSlice = createSlice({
  name: "columns",
  initialState,
  reducers: {
    onLoadAllColumns(state) {
      state.isLoading = true;
    },
    onLoadAllColumnsSucces(state, action: PayloadAction<ColumnItem[]>) {
      state.isLoading = false;
      state.error = null;
      state.columns = action.payload;
    },
    onLoadAllColumnsError(state, action: PayloadAction<string | null>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // --------------------------------------------------------------------------------
    onCreateColumn(state) {
      state.isLoading = true;
    },
    onCreateColumnSucces(state, action: PayloadAction<ColumnItem>) {
      state.isLoading = false;
      state.error = null;
      state.columns.push(action.payload);
    },
    onCreateColumnError(state, action: PayloadAction<string | null>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // ---------------------------------------------------------------------------------
    onUpdateColumn(state) {
      state.isLoading = true;
    },
    onUpdateColumnSucces(state, action: PayloadAction<ColumnItem>) {
      state.isLoading = false;
      state.error = null;

      state.columns = state.columns.map((column) => {
        return column.id === action.payload.id ? action.payload : column;
      });
    },
    onUpdateColumnError(state, action: PayloadAction<string | null>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // ----------------------------------------------------------------------------------
    onDeleteColumn(state) {
      state.isLoading = true;
    },
    onDeleteColumnSucces(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = null;
      state.columns = state.columns.filter((column) => {
        return column.id !== action.payload;
      });
    },
    onDeleteColumnError(state, action: PayloadAction<string | null>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // ---------------------------------------------------------------------------------
    onChangeFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

export default ColumnsSlice.reducer;
