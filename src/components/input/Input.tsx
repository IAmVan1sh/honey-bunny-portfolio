import {FC, MouseEvent, useRef} from "react";
import styles from "./Input.module.css";
import InputAssets from "../../assets/input/InputAssets.ts";
import {StyledInput} from "../../styles/InputStyles.tsx";
import {InputProps} from "../../types/input.ts";

const Input: FC<InputProps> = ({
	isAlreadyReceives = false,
	isHidden,
	noImage,
	shift,
	variant,
	buttonClick,
	...props
}) => {
	const inputRef = useRef<HTMLInputElement>(null!);

	const inputHandle = (event: MouseEvent<HTMLImageElement>) => {

		if (shift) {
			inputRef.current.style.marginRight = "1.388vw";
			event.currentTarget.style.marginRight = "1.388vw";
		}

		inputRef.current.style.display = "block";
		inputRef.current.focus();
		inputRef.current.style.width = "100%";

		if (variant !== "transparent" && variant !== "transparent-next") {
			inputRef.current.style.padding = "0.6944vw 5.138vw 0.6944vw 1.736vw";
		}
	};

	return (
		<div className={(props.type === "radio" || props.type === "checkbox") ?
			""
			:
			`${styles.input} ${props.className}`
		}>
			<StyledInput
				{...props}
				{...{isHidden, noImage, variant}}
				ref={inputRef}
				className={`${styles.inputInput} ${(props.type === "radio" || props.type === "checkbox") && props.className}`}
				type={ props.type || "text" }
				placeholder={
					variant === "warning" && (
						isAlreadyReceives &&
                            "Цей E-mail вже отримує розсилання" ||
                            "Невірно введені дані"
					) ||
                    props.placeholder ||
                    "Знайти смаколики"
				}
			/>

			{
				props.type === "radio" ||
                props.type === "checkbox" ||
				noImage ||
				<img
					alt="btn"
					className={styles.inputImg}
					src={`${
						props.buttonPicture ||
							variant === "transparent" && InputAssets.searchWhite ||
							variant === "warning" && InputAssets.warning ||
							variant === "checked" && InputAssets.checked ||
							variant === "wrong" && InputAssets.wrong ||
							variant === "unchecked" && InputAssets.unchecked ||
							variant === "next" && InputAssets.nextGray ||
							variant === "transparent-next" && InputAssets.nextWhite ||
							variant === "transparent-checked" && InputAssets.checked ||
							InputAssets.searchGray
					}`}
					style={(variant === ("checked" || "wrong" || "unchecked" || "warning" || "transparent-checked") ? {} : {cursor: "pointer"})}
					onClick={(event) => {
						inputHandle(event);
						buttonClick && buttonClick(event);
					}}
				/>
			}

		</div>
	);
};

export default Input;