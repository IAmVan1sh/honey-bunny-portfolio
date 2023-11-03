import {FC} from "react";
import {ButtonProps} from "../../types/button.ts";
import styles from "./Button.module.css";

const Button: FC<ButtonProps> = (props) => {
	return (
		<button {...props} className={`${styles.generalButton} ${props.className}`}>
			<span>{props.children}</span>
		</button>
	);
};

export default Button;