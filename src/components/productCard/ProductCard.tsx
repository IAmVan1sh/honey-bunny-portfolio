import {FC} from "react";
import {ProductCardProps} from "../../types/productCard.ts";
import styles from "./ProductCard.module.css";
import Button from "../button/Button.tsx";
import useActions from "../../hooks/useActions.ts";
import {useAppSelector} from "../../store/hooks.ts";

const ProductCard: FC<ProductCardProps> = (props) => {
	const { toggleCart } = useActions();
	const isExist = useAppSelector(state =>
		state.basket.items.some(
			item => item.product.id === props.productObj.id
		)
	);

	return (
		<section {...props} className={`${styles.productCard} ${props.className}`}>

			<img
				alt={""}
				src={props.productObj.image}
				className={styles.productImg}
			/>

			<h3 className={styles.productTitle}>{ props.productObj.title }</h3>

			{props.productObj.inStock > 0 ?
				<p className={`${styles.productStatus} ${styles.Green}`}>В наявності</p>
				:
				<p className={`${styles.productStatus} ${styles.Red}`}>Не в наявності</p>
			}

			<h4 className={styles.productPrice}>
				{props.productObj.price} грн.
				{props.productObj.isWeight > 0
					?
					<span className={styles.productPerWeight}> / {props.productObj.isWeight} г</span>
					:
					""
				}
			</h4>

			<Button className={styles.productButton} onClick={() => toggleCart({ product: props.productObj, quantity: 1 })}>
				{isExist ? "Прибрати з кошику" : "Додати в кошик"}
			</Button>

		</section>
	);
};

export default ProductCard;