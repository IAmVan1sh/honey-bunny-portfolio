import api from "./api.ts";

const userApi = api.injectEndpoints({
	endpoints: build => ({
		register: build.mutation({
			query: email => ({
				body: email,
				url: "/registration",
				method: "POST",
			})
		}),
	})
});

export const {useRegisterMutation} = userApi;