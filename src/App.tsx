import React from "react";

import style from "./App.module.scss";
import Button from "./components/shared/button";
import Input from "./components/shared/input";

function App() {
  return (
    <div className={style["App"]}>
      <div className={style["App__create-todo"]}>
        <div className={style["App__create-todo__cards"]}>
          {}
        </div>
        <div className={style["App__create-todo__form"]}>
          <div className={style["App__create-todo__form__title"]}>
            <Input
              className={style["App__create-todo__form__title__input"]}
              label="title"
            />
          </div>
          <div className={style["App__create-todo__form__action"]}>
            <Button
              className={style["App__create-todo__form__button"]}
              label="Add"
            />
          </div>
        </div>
      </div>
      <div className={style["App__todo-lis"]}></div>
    </div>
  );
}

export default App;
