import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    variant?: "primary" | "transparent" | "warning" | "checked" | "wrong" | "unchecked" | "next" | "transparent-next" | "transparent-checked";
    isHidden?: boolean;
    shift?: boolean;
    noImage?: boolean;
    isAlreadyReceives?: boolean;
    buttonPicture?:
        "searchGray" |
        "searchWhite" |
        "nextWhite" |
        "nextGray" |
        "warning" |
        "wrong" |
        "checked" |
        "unchecked";
    buttonClick?: (arg: React.MouseEvent<HTMLImageElement>) => void;
}