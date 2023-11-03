import {CaseReducer, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductCardType} from "../../types/productCard.ts";

interface CartItem {
	product: ProductCardType;
	quantity: number;
}

interface changeQuantityAction {
	id: number;
	type: "minus" | "plus";
}

interface InitialStateType {
	items: CartItem[]
}

const initialState: InitialStateType = {
	items: []
};

const toggleCart: CaseReducer<InitialStateType, PayloadAction<CartItem>> = (state, { payload: product }) => {
	const isExist = state.items.find(item => item.product.id === product.product.id);
	if (isExist) {
		state.items = state.items.filter(
			item => item !== isExist
		);
	} else {
		state.items.push(product);
	}
};

const changeQuantity: CaseReducer<InitialStateType, PayloadAction<changeQuantityAction>> = (state, { payload: { id, type }}) => {
	const item = state.items.find(item => item.product.id === id);
	if (item) type === "plus" ? item.quantity++ : item.quantity--;
};

const BasketSlice = createSlice({
	name: "basket",
	initialState,
	reducers: {
		toggleCart,
		changeQuantity,
	}
});

export const { actions: basketActions, reducer: basketReducers } = BasketSlice;