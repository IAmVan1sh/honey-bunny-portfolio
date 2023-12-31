import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {basketReducers} from "./basket/Basket.slice.ts";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";
import api from "./api/api.ts";

const rootReducer = combineReducers({
	basket: basketReducers,
	[api.reducerPath]: api.reducer
});

const persistConfig = ({
	key: "honey-bunny-project",
	storage,
	whitelist: ["basket"],
	rootReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			}
		}).concat(api.middleware)
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;