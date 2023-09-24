import {DetailedHTMLProps, HTMLAttributes} from "react";

interface ProductCardType {
    id: number;
    image: string;
    title: string;
    inStock: number;
    price: number;
    isWeight: number;
}

export interface ProductCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    productObj: ProductCardType;
}

export interface ProductDataBase {
    'popular': ProductCardType[];
    'marshmallow': ProductCardType[];
    'zephyr': ProductCardType[];
    'cookies': ProductCardType[];
    'macaroons': ProductCardType[];
    'birds-milk': ProductCardType[];
    'jelly': ProductCardType[];
}

export interface SetsType {
    byWeight: ProductCardType[],
    prePackaged: ProductCardType[]
}

export interface ProductTitlesBase {
    'sets': string;
    'marshmallow': string;
    'zephyr': string;
    'cookies': string;
    'macaroons': string;
    'birds-milk': string;
    'jelly': string;
}