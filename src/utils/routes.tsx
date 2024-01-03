import {RouteInterface} from "../types/route.ts";
import ConfirmOrder from "../pages/confirmOrder/ConfirmOrder.tsx";
import Basket from "../pages/basket/Basket.tsx";
import Shop from "../pages/shop/Shop.tsx";
import Catalog from "../pages/catalog/Catalog.tsx";
import Mistake from "../pages/mistake/Mistake.tsx";
import Loading from "../pages/loading/Loading.tsx";
import OrderForm from "../pages/order/OrderForm.tsx";
import {
	BASKET_ROUTE,
	CATALOG_ROUTE,
	CONFIRM_ORDER_ROUTE,
	LOADING_ROUTE,
	MISTAKE_ROUTE,
	ORDER_FORM_ROUTE,
	SHOP_ROUTE,
} from "./consts.ts";

export const appRoutes: RouteInterface[] = [
	{path: CONFIRM_ORDER_ROUTE, element: <ConfirmOrder />},
	{path: BASKET_ROUTE, element: <Basket />},
	{path: SHOP_ROUTE, element: <Shop />},
	{path: CATALOG_ROUTE, element: <Catalog />},
	{path: MISTAKE_ROUTE, element: <Mistake />},
	{path: LOADING_ROUTE, element: <Loading />},
	{path: ORDER_FORM_ROUTE, element: <OrderForm />},
];

// export const itemRoutes: RouteInterface[] = [
// 	{path: SETS_ROUTE, element: <CatalogItems />},
// 	{path: MARSHMALLOW_ROUTE, element: <CatalogItems />},
// 	{path: ZEPHYR_ROUTE, element: <CatalogItems />},
// 	{path: COOKIES_ROUTE, element: <CatalogItems />},
// 	{path: MACAROONS_ROUTE, element: <CatalogItems />},
// 	{path: BIRDS_MILK_ROUTE, element: <CatalogItems />},
// 	{path: JELLY_ROUTE, element: <CatalogItems />},
// ];