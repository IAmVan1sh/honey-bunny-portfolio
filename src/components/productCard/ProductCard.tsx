import {FC} from "react";
import {productCardProps} from "../../types/productCard.ts";
import styles from "./ProductCard.module.css"
import Button from "../button/Button.tsx";

const ProductCard: FC<productCardProps> = (props) => {

    return (
        <section {...props} className={`${styles.productCard} ${props.className}`}>

            <img
                alt={''}
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
                    ''
                }
            </h4>

            <Button className={styles.productButton}>Додати в кошик</Button>

        </section>
    );
};

export default ProductCard;