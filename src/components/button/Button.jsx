import React, {useEffect} from "react";
import cl from "./button.module.scss";
import cn from "classnames";

function Button({children, onClick, disabled = false}) {
  return (
    <div className={cn(cl.button, disabled && cl.buttonDisabled)}>
      <button
        disabled={disabled}
        onClick={() => {
          onClick();
        }}>
        {children}
      </button>
    </div>
  );
}

export default Button;
