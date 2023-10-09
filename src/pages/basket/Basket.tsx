import {FC} from "react";
import {useAppSelector} from "../../store/hooks.ts";
import BasketCard from "../../components/basketCard/BasketCard.tsx";

const Basket: FC = () => {
	const basket = useAppSelector(state => state.basket);

	return (
		<main>
			{basket.map(productCard =>
				<BasketCard key={productCard.id} productObj={productCard}/>
			)}
		</main>
	);
};

export default Basket;