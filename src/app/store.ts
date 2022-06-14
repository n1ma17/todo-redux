import { configureStore } from "@reduxjs/toolkit";
import createTodosReducer from "../features/createTodosSlice";
import todoListReducer from "../features/todoListSlice";


export const store = configureStore({
  reducer: {
    createTodo: createTodosReducer,
    todoList: todoListReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
