export const formatToCurrency = (price: number) =>
	new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "UAH",
	}).format(price);