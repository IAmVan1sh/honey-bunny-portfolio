import catalog1 from './networks.jpg'
import catalog2 from './marshmallow.jpg'
import catalog3 from './cookies.jpg'
import catalog4 from './macaroons.jpg'
import catalog5 from './zephyr.jpg'
import catalog6 from './birdsMilk.jpg'
import catalog7 from './marmalade.jpg'
import {
    BIRDS_MILK_ROUTE,
    COOKIES_ROUTE, JELLY_ROUTE,
    MACAROONS_ROUTE,
    MARSHMALLOW_ROUTE,
    SETS_ROUTE,
    ZEPHYR_ROUTE
} from "../../utils/consts";

const catalogImages = [
    {img: catalog1, title: 'Сети', url: SETS_ROUTE},
    {img: catalog2, title: 'Маршмелоу', url: MARSHMALLOW_ROUTE},
    {img: catalog3, title: 'Печиво', url: COOKIES_ROUTE},
    {img: catalog4, title: 'Макаруни', url: MACAROONS_ROUTE},
    {img: catalog5, title: 'Зефір', url: ZEPHYR_ROUTE},
    {img: catalog6, title: 'Пташине молоко', url: BIRDS_MILK_ROUTE},
    {img: catalog7, title: 'Мармелад', url: JELLY_ROUTE},
]

export default catalogImages;