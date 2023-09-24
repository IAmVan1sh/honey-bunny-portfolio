import {DetailedHTMLProps, InputHTMLAttributes} from "react";

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    $variant?: "primary" | "transparent" | "warning" | "checked" | "wrong" | "unchecked" | "next" | "transparent-next";
    $hide?: boolean;
    $shift?: boolean;
    $noImage?: boolean;
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