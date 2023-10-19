import React, {useEffect} from "react";
import cl from "./button.module.scss";
import cn from "classnames";
import {NavLink} from "react-router-dom";

function Button({children, path, onClick, disabled = false}) {
  return (
    <div className={cn(cl.button, disabled && cl.buttonDisabled)}>
      <NavLink to={path}>
        <button disabled={disabled} onClick={onClick}>
          {children}
        </button>
      </NavLink>
    </div>
  );
}

export default Button;
