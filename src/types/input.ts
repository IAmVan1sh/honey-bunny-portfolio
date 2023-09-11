import {DetailedHTMLProps, InputHTMLAttributes} from "react";

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    $variant?: "primary" | "transparent" | "warning" | "checked" | "wrong" | "unchecked" | "transparent-next";
    $email?: boolean;
    $hide?: boolean;
    $shift?: boolean;
    buttonPicture?:
        "searchGray" |
        "searchWhite" |
        "nextWhite" |
        "nextGray" |
        "warning" |
        "wrong" |
        "checked" |
        "unchecked";
}