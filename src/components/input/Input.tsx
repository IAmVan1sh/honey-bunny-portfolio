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
        <div className={`${styles.input} ${props.className}`}>
            <StyledInput
                {...props}
                id={"elt"}
                className={styles.inputInput}
                ref={inputRef}
                placeholder={
                    props.$variant === "warning" ?
                        (isAlreadyReceives ?
                            "Цей E-mail вже отримує розсилання"
                            :
                            "Невірно введені дані")
                        :
                        props.placeholder || "Знайти смаколики"
                }
                type={props.$email ? "email" : "text"}
            />
            <img
                alt="btn"
                className={styles.inputImg}
                src={`${props.buttonPicture ? 
                    InputAssets[props.buttonPicture]
                    :
                    props.$variant === "transparent" ?
                        InputAssets.searchWhite 
                        :
                        props.$variant === "warning" ? 
                            InputAssets.warning
                            :
                            props.$variant === "checked" ?
                                InputAssets.checked
                                :
                                props.$variant === "wrong" ?
                                    InputAssets.wrong
                                    :
                                    props.$variant === "unchecked" ?
                                        InputAssets.unchecked
                                        :
                                        props.$variant === "transparent-next" ?
                                            InputAssets.nextWhite
                                            :
                                            InputAssets.searchGray
                }`}
                style={(props.$variant === ("checked" || "wrong" || "unchecked") ? {cursor: 'default'} : {})}
                onClick={(event) => inputHandle(event)}
            />
        </div>
    )
};

export default Input;