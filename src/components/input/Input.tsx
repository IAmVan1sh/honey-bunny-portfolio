import {FC, MouseEvent, useRef, useState} from "react";
import {InputProps} from "../../types/input.ts";
import styles from "./Input.module.css"
import InputAssets from "../../assets/input/InputAssets.ts";
import {StyledInput} from "../../styles/InputStyles.tsx";

const Input: FC<InputProps> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null!)
    const [isAlreadyReceives] = useState(false);

    const inputHandle = (event: MouseEvent<HTMLImageElement>) => {

        if (props.$shift) {
            inputRef.current.style.marginRight = '1.388vw';
            event.currentTarget.style.marginRight = '1.388vw';
        }

        inputRef.current.style.display = 'block';
        inputRef.current.focus();
        inputRef.current.style.width = '100%';
        inputRef.current.style.padding = '0.6944vw 5.138vw 0.6944vw 1.736vw';
    }

    return (
        <div className={(props.type === "radio" || props.type === "checkbox") ?
            ""
            :
            `${styles.input} ${props.className}`
        }>
            <StyledInput
                {...props}
                ref={inputRef}
                className={`${styles.inputInput} ${(props.type === "radio" || props.type === "checkbox") && props.className}`}
                type={ props.type || "text" }
                placeholder={
                    props.$variant === "warning" && (
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
                props.$noImage ||
                <img
                    alt="btn"
                    className={styles.inputImg}
                    src={`${
                        props.buttonPicture ||
                        props.$variant === "transparent" && InputAssets.searchWhite ||
                        props.$variant === "warning" && InputAssets.warning ||
                        props.$variant === "checked" && InputAssets.checked ||
                        props.$variant === "wrong" && InputAssets.wrong ||
                        props.$variant === "unchecked" && InputAssets.unchecked ||
                        props.$variant === "next" && InputAssets.nextGray ||
                        props.$variant === "transparent-next" && InputAssets.nextWhite ||
                        InputAssets.searchGray
                     }`}
                    style={(props.$variant === ("checked" || "wrong" || "unchecked") ? {cursor: 'default'} : {})}
                    onClick={(event) => inputHandle(event)}
                />
            }

        </div>
    )
};

export default Input;