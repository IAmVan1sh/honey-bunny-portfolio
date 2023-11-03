import {FC} from "react";
import {useAppSelector} from "../../store/hooks.ts";
import BasketCard from "../../components/basketCard/BasketCard.tsx";

const Basket: FC = () => {
	const basket = useAppSelector(state => state.basket.items);

	return (
		<main>
			{basket.map(cartItem =>
				<BasketCard key={cartItem.product.id} productObj={cartItem.product}/>
			)}
		</main>
	);
};

export default Basket;