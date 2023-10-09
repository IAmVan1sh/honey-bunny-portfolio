import {CaseReducer, createSlice} from "@reduxjs/toolkit";
import {ProductCardType} from "../../types/productCard.ts";

type InitialStateType = ProductCardType[]

interface BasketActions {
    type: string;
    payload: {
		card: ProductCardType;
		count?: number;
	}
}

const initialState: InitialStateType = [];

const toggleBasket: CaseReducer<InitialStateType, BasketActions> = (
	state,
	{ payload: { card }}
) => {

	const isExistsIndex = state.findIndex(c => c.id === card.id);

	if (isExistsIndex != -1) {
		state.splice(isExistsIndex, 1);
	} else {
		state.push({ ...card, count: 1 });
	}
    
};

const changeAmountInBasket: CaseReducer<InitialStateType, BasketActions> = (
	state,
	{payload: { card , count }}
) => {
	
	const isExistsIndex = state.findIndex(c => c.id === card.id);
	
	if (isExistsIndex != -1 && count) {
		if (1 < state[isExistsIndex].count! && state[isExistsIndex].count! < 99) {
			state[isExistsIndex].count! += count;
		}
	}
	
};

const BasketSlice = createSlice({
	name: "basket",
	initialState,
	reducers: {
		toggleBasket,
		changeAmountInBasket,
	}
});

export const { actions: basketActions, reducer: basketReducers } = BasketSlice;