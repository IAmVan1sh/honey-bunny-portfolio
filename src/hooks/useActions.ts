import {useAppDispatch} from "../store/hooks.ts";
import {basketActions} from "../store/basket/Basket.slice.ts";
import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";

const RootActions = {
	...basketActions,
};

const useActions = () => {
	const dispatch = useAppDispatch();

	return useMemo(() => bindActionCreators(RootActions, dispatch), [dispatch]);
};

export default useActions;