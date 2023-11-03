import {ProductDataBase, ProductTitlesBase, SetsType} from "../../types/productCard";
import {
	marshmallow,
	zephyr,
	cookies,
	macaroons,
	birdsMilk,
	jelly, tastesSets
} from "./productImages";

const productData: ProductDataBase = {
	"popular": [
		{id: 6, image: zephyr.zephyr1, title: "макаруни з ківі", inStock: 10, price: 100, isWeight: 100},
		{id: 7, image: zephyr.zephyr2, title: "Зефір банановий", inStock: 10, price: 40, isWeight: 100},
		{id: 8, image: zephyr.zephyr3, title: "Зефір з ківі", inStock: 10, price: 937, isWeight: 100},
		{id: 9, image: zephyr.zephyr4, title: "Зефір ананасовий", inStock: 10, price: 40, isWeight: 100},
		{id: 10, image: zephyr.zephyr5, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 11, image: cookies.cookie1, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 12, image: cookies.cookie2, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 13, image: cookies.cookie3, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 14, image: cookies.cookie4, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 15, image: cookies.cookie5, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 1, image: marshmallow.marshmallow1, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 2, image: marshmallow.marshmallow2, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 3, image: marshmallow.marshmallow3, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
	],
	"marshmallow": [
		{id: 1, image: marshmallow.marshmallow1, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 2, image: marshmallow.marshmallow2, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 3, image: marshmallow.marshmallow3, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 4, image: marshmallow.marshmallow4, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 5, image: marshmallow.marshmallow5, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
	],
	"zephyr": [
		{id: 6, image: zephyr.zephyr1, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 7, image: zephyr.zephyr2, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 8, image: zephyr.zephyr3, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 9, image: zephyr.zephyr4, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 10, image: zephyr.zephyr5, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
	],
	"cookies": [
		{id: 11, image: cookies.cookie1, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 12, image: cookies.cookie2, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 13, image: cookies.cookie3, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 14, image: cookies.cookie4, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 15, image: cookies.cookie5, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
	],
	"macaroons": [
		{id: 16, image: macaroons.macaroons1, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 17, image: macaroons.macaroons2, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 18, image: macaroons.macaroons3, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 19, image: macaroons.macaroons4, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 20, image: macaroons.macaroons5, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
	],
	"birds-milk": [
		{id: 21, image: birdsMilk.birdsMilk1, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 22, image: birdsMilk.birdsMilk2, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 23, image: birdsMilk.birdsMilk3, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 24, image: birdsMilk.birdsMilk4, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
	],
	"jelly": [
		{id: 25, image: jelly.jelly1, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 26, image: jelly.jelly2, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 27, image: jelly.jelly3, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 28, image: jelly.jelly4, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 29, image: jelly.jelly5, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
	],
};

export const productSets: SetsType = {
	byWeight: [
		{id: 30, image: tastesSets.tastesSets1, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 31, image: tastesSets.tastesSets2, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 32, image: tastesSets.tastesSets3, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 33, image: tastesSets.tastesSets4, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
	],
	prePackaged: [
		{id: 34, image: tastesSets.tastesSets5, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 0},
		{id: 35, image: tastesSets.tastesSets6, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 0},
		{id: 36, image: tastesSets.tastesSets7, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 0},
		{id: 37, image: tastesSets.tastesSets8, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 0},
		{id: 38, image: tastesSets.tastesSets9, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 0},
	]
};

export const productTitles: ProductTitlesBase = {
	"sets": "Сети",
	"marshmallow": "Маршмелоу",
	"zephyr": "Зефір",
	"cookies": "Зефір",
	"macaroons": "Макаруни",
	"birds-milk": "Пташине молоко",
	"jelly": "Мармелад",
};

export default productData;