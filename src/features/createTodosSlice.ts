import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type TFormData = {
    title: string,
    description: string
}
interface ICreateTodo {
  value: TFormData[];
}
const initialState: ICreateTodo = {
  value: [],
};

export const createTodosSlice = createSlice({
  name: "createTodos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TFormData>) => {
      state.value.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
        console.log(action.payload);
        state.value.splice(action.payload, 1)
    }
  },
});
export const { addTodo,removeTodo } = createTodosSlice.actions;
export default createTodosSlice.reducer;
