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
		{id: 1, image: zephyr.zephyr1, title: "макаруни з ківі", inStock: 10, price: 100, isWeight: 100},
		{id: 2, image: zephyr.zephyr2, title: "Зефір банановий", inStock: 10, price: 40, isWeight: 100},
		{id: 3, image: zephyr.zephyr3, title: "Зефір з ківі", inStock: 10, price: 937, isWeight: 100},
		{id: 4, image: zephyr.zephyr4, title: "Зефір ананасовий", inStock: 10, price: 40, isWeight: 100},
		{id: 5, image: zephyr.zephyr5, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 6, image: cookies.cookie1, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 7, image: cookies.cookie2, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 8, image: cookies.cookie3, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 9, image: cookies.cookie4, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 10, image: cookies.cookie5, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 11, image: marshmallow.marshmallow1, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 12, image: marshmallow.marshmallow2, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 13, image: marshmallow.marshmallow2, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
	],
	"marshmallow": [
		{id: 1, image: marshmallow.marshmallow1, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 2, image: marshmallow.marshmallow2, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 3, image: marshmallow.marshmallow3, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 4, image: marshmallow.marshmallow4, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 5, image: marshmallow.marshmallow5, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
	],
	"zephyr": [
		{id: 1, image: zephyr.zephyr1, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 2, image: zephyr.zephyr2, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 3, image: zephyr.zephyr3, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 4, image: zephyr.zephyr4, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 5, image: zephyr.zephyr5, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
	],
	"cookies": [
		{id: 1, image: cookies.cookie1, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 2, image: cookies.cookie2, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 3, image: cookies.cookie3, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 4, image: cookies.cookie4, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 5, image: cookies.cookie5, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
	],
	"macaroons": [
		{id: 1, image: macaroons.macaroons1, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 2, image: macaroons.macaroons2, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 3, image: macaroons.macaroons3, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 4, image: macaroons.macaroons4, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 5, image: macaroons.macaroons5, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
	],
	"birds-milk": [
		{id: 1, image: birdsMilk.birdsMilk1, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 2, image: birdsMilk.birdsMilk2, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 3, image: birdsMilk.birdsMilk3, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 4, image: birdsMilk.birdsMilk4, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
	],
	"jelly": [
		{id: 1, image: jelly.jelly1, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 2, image: jelly.jelly2, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 3, image: jelly.jelly3, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 4, image: jelly.jelly4, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 5, image: jelly.jelly5, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
	],
};

export const productSets: SetsType = {
	byWeight: [
		{id: 1, image: tastesSets.tastesSets1, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 2, image: tastesSets.tastesSets2, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 3, image: tastesSets.tastesSets3, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
		{id: 4, image: tastesSets.tastesSets4, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 100},
	],
	prePackaged: [
		{id: 1, image: tastesSets.tastesSets5, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 0},
		{id: 2, image: tastesSets.tastesSets6, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 0},
		{id: 3, image: tastesSets.tastesSets7, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 0},
		{id: 4, image: tastesSets.tastesSets8, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 0},
		{id: 5, image: tastesSets.tastesSets9, title: "Зефір яблучний", inStock: 10, price: 40, isWeight: 0},
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