import React, { Dispatch, useState } from "react";

import style from "./App.module.scss";
import Button from "./components/shared/button";
import Input from "./components/shared/input";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./app/store";
import { addTodo, removeTodo, TFormData } from "./features/createTodosSlice";

function App() {
  const [formData, setFormData] = useState<TFormData>({
    title: "",
    description: "",
  });
  const status = useSelector((state:RootState) => state.todoList.status)
  const todos = useSelector((state: RootState) => state.createTodo.value);
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    dispatch(addTodo(formData));
  };
  const handleRemoveTodo = (i: number): any => {
    dispatch(removeTodo(i));
  };
  return (
    <div className={style["App"]}>
      <div className={style["App__create-todo"]}>
        <h3>Todo List</h3>
        <div className={style["App__create-todo__cards"]}>
          {todos.map((card, i) => (
            <div
              key={i}
              onClick={() => handleRemoveTodo(i)}
              className={style["App__create-todo__cards__card"]}
            >
              <p>title: {card.title}</p>
              <p>description: {card.description}</p>
            </div>
          ))}
        </div>
        <div className={style["App__create-todo__form"]}>
          <div className={style["App__create-todo__form__title"]}>
            <Input
              className={style["input"]}
              label="title"
              onChange={(value: string) =>
                setFormData({ ...formData, title: value })
              }
            />
          </div>
          <div className={style["App__create-todo__form__title"]}>
            <Input
              className={style["input"]}
              label="description"
              onChange={(value: any) =>
                setFormData({ ...formData, description: value })
              }
            />
          </div>
          <div className={style["App__create-todo__form__action"]}>
            <Button
              className={style["App__create-todo__form__button"]}
              label="Add"
              onClick={handleAddTodo}
            />
          </div>
        </div>
      </div>
      <div className={style["App__todo-lis"]}>
        <div className={style["App__todo-lis__cards"]}>
          {status}
          <div className={style["App__todo-lis__cards__form"]}>
            <Input
              className={style["input"]}
              label="title"
              onChange={(value: string) =>
                setFormData({ ...formData, title: value })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
