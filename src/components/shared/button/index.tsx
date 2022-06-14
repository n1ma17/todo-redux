import React from "react";

import style from "./Button.module.scss";

function Button(props: any) {
  const { className, label, onClick } = props;
  return (
    <div>
      <button onClick={onClick} className={className} >
        {label}
      </button>
    </div>
  );
}

export default Button;
