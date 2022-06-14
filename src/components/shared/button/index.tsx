import React from "react";

import style from "./Button.module.scss";

function Button(props: any) {
  const { className, label } = props;
  return (
    <div>
      <button className={className} >
        {label}
      </button>
    </div>
  );
}

export default Button;
