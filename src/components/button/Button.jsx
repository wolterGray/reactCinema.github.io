import React from "react";
import cl from './button.module.scss'

function Button({children}) {
  return (
    <div className={cl.button}>
      <button>{children}</button>
    </div>
  );
}

export default Button;
