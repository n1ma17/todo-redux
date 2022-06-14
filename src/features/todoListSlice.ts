import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITodoList {
  status: string ;
}
const initialState: ITodoList = {
  status: 'todo',
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    changeStatus: (state, action: PayloadAction<string>) => {
        state.status = action.payload
    }
  },
});
export const { changeStatus } = todoListSlice.actions;
export default todoListSlice.reducer;
