import {
    BIRDS_MILK_ROUTE,
    CATALOG_ROUTE,
    COOKIES_ROUTE, JELLY_ROUTE,
    MACAROONS_ROUTE,
    MARSHMALLOW_ROUTE,
    SHOP_ROUTE,
    ZEPHYR_ROUTE
} from "../../utils/consts.ts";

export interface bcOBJ {
    [index: string]: {
        label: string;
        url: string;
    }
}

const BCItems: bcOBJ = {
    '': {label: "Головна сторінка", url: SHOP_ROUTE},
    'catalog': {label: "Каталог товарів", url: CATALOG_ROUTE},
    'marshmallow': {label: "Маршмелоу", url: MARSHMALLOW_ROUTE},
    'zephyr': {label: "Зефір", url: ZEPHYR_ROUTE},
    'cookies': {label: "Печиво", url: COOKIES_ROUTE},
    'macaroons': {label: "Макаруни", url: MACAROONS_ROUTE},
    'birds-milk': {label: "Пташине молоко", url: BIRDS_MILK_ROUTE},
    'jelly': {label: "Мармелад", url: JELLY_ROUTE},
}

export default BCItems;