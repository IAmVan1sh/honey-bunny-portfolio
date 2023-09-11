import {FC} from "react";
import {buttonProps} from "../../types/button.ts";
import styles from "./Button.module.css"

const Button: FC<buttonProps> = (props) => {
    const buttonStyles: string = styles.generalButton + " " + props.className;

    return (
        <button {...props} className={buttonStyles}>
            <span>{props.children}</span>
        </button>
    );
};

export default Button;