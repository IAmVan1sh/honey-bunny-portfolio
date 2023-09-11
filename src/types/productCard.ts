import {DetailedHTMLProps, HTMLAttributes} from "react";

interface productCardType {
    id: number;
    image: string;
    title: string;
    inStock: number;
    price: number;
    isWeight: number;
}

export interface productCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    productObj: productCardType;
}

export interface productDataBase {
    'popular': productCardType[];
    'marshmallow': productCardType[];
    'zephyr': productCardType[];
    'cookies': productCardType[];
    'macaroons': productCardType[];
    'birds-milk': productCardType[];
    'jelly': productCardType[];
}

export interface setsType {
    byWeight: productCardType[],
    prePackaged: productCardType[]
}

export interface productTitlesBase {
    'sets': string;
    'marshmallow': string;
    'zephyr': string;
    'cookies': string;
    'macaroons': string;
    'birds-milk': string;
    'jelly': string;
}