import {FC} from "react";
import {ProductCardProps} from "../../types/productCard.ts";
import styles from "./BasketCard.module.css";
import remove from "../../assets/Remove.svg";
import decrease from "../../assets/Minus.svg";
import increase from "../../assets/Plus.svg";
import useActions from "../../hooks/useActions.ts";
import {useAppSelector} from "../../store/hooks.ts";

const BasketCard: FC<ProductCardProps> = (props) => {
	const { toggleCart, changeQuantity } = useActions();
	const basket = useAppSelector(state => state.basket.items);
	const itemIndex = basket.findIndex(item => item.product.id === props.productObj.id);

	const buttonsCounterHandler = (action: "minus" | "plus") => {
		if (action === "minus") {
			if (basket[itemIndex].quantity - 1 > 0) {
				changeQuantity({id: props.productObj.id, type: "minus"});
			}
		} else {	
			if (basket[itemIndex].quantity + 1 < 100) {
				changeQuantity({ id: props.productObj.id, type: "plus"});
			}
		}
	};

	return (
		<section {...props} className={`${styles.productCard} ${props.className}`}>

			<img alt="del" src={remove} className={styles.productRemove} onClick={() => toggleCart({ product: props.productObj, quantity: 1})}/>

			<img
				alt={""}
				src={props.productObj.image}
				className={styles.productImg}
			/>

			<section className={styles.basketContent}>

				<h3 className={styles.productTitle}>{ props.productObj.title }</h3>

				<p className={styles.productPrice}>
					{props.productObj.price} грн.
					{props.productObj.isWeight > 0
						?
						<span className={styles.productPerWeight}> / {props.productObj.isWeight} г</span>
						:
						""
					}
				</p>

				<section className={styles.productCounter}>

					<button className={styles.productCounterButton} onClick={() => buttonsCounterHandler("minus")}>
						<img alt="-" src={decrease} className={styles.productCounterButtonImage}/>
					</button>

					<span className={styles.productCount}>{basket[itemIndex].quantity}</span>

					<button className={styles.productCounterButton} onClick={() => buttonsCounterHandler("plus")}>
						<img alt="+" src={increase} className={styles.productCounterButtonImage}/>
					</button>

				</section>

			</section>

			<p className={styles.basketPrice}>{props.productObj.price} грн.</p>

		</section>
	);
};

export default BasketCard;