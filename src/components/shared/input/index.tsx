import React from "react";

import style from "./input.module.scss";

function Input(props: any) {
  const { className, label } = props;
  return (
    <div>
      <label htmlFor={label}>{label}:</label>
      <input id={label} type="text" className={className} />
    </div>
  );
}

export default Input;
