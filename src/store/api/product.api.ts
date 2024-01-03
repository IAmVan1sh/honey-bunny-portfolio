import api from "./api.ts";

const productApi = api.injectEndpoints({
	endpoints: build => ({
		createProduct: build.mutation({
			query: (product) => ({
				body: product,
				url: "/new-product",
				method: "POST"
			})
		})
	})
});

export const {useCreateProductMutation} = productApi;