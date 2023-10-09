import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {basketReducers} from "./basket/Basket.slice.ts";

const reducers = combineReducers({
	basket: basketReducers,
});

const store = configureStore({
	reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;