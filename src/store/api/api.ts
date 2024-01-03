import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_URL} from "../../utils/consts.ts";

const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	reducerPath: "api",
	tagTypes: ["Product", "User"],
	endpoints: build => ({
		start: build.query({
			query: () => "/"
		})
	})
});

export default api;