import {InputProps} from "./input.ts";
import {RegisterOptions} from "react-hook-form";
export default interface OrderFormInputs {
    lastName: string;
    firstName: string;
    phoneNumber: string;
    city: string;
    deliveryService: number;
    paymentMethod: number;
    comment: string;
    DO_NOT_CALL_ME_BACK: "";
}

export interface OrderFormConfigChild extends InputProps{
    name: keyof OrderFormInputs;
    id: string;
    $rules?: Omit<RegisterOptions<OrderFormInputs, keyof OrderFormInputs>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
    label?: string;
    $subtitle?: string;
    $bigMarginTop?: string;
}

export interface OrderFormConfigType {
    [T: string]: OrderFormConfigChild[],
}

