import React from "react";

import style from "./input.module.scss";

function Input(props: any) {
  const { className, label, onChange } = props;
  return (
    <div>
      <label htmlFor={label}>{label}:</label>
      <input
        onChange={(e) => onChange(e.target.value)}
        id={label}
        type="text"
        className={className}
      />
    </div>
  );
}

export default Input;
