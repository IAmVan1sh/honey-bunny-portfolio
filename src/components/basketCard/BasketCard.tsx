import {FC} from "react";
import {ProductCardProps} from "../../types/productCard.ts";
import styles from "./BasketCard.module.css"
import remove from "../../assets/Remove.svg"
import decrease from "../../assets/Minus.svg"
import increase from "../../assets/Plus.svg"

const BasketCard: FC<ProductCardProps> = (props) => {

    return (
        <section {...props} className={`${styles.productCard} ${props.className}`}>

            <img alt="del" src={remove} className={styles.productRemove}/>

            <img
                alt={''}
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
                        ''
                    }
                </p>

                <section className={styles.productCounter}>

                    <button className={styles.productCounterButton}>
                        <img alt="-" src={decrease} className={styles.productCounterButtonImage}/>
                    </button>

                    <span className={styles.productCount}>1</span>

                    <button className={styles.productCounterButton}>
                        <img alt="+" src={increase} className={styles.productCounterButtonImage}/>
                    </button>

                </section>

            </section>

            <p className={styles.basketPrice}>{props.productObj.price} грн.</p>

        </section>
    );
};

export default BasketCard;