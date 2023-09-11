import {Fragment} from "react";
import styles from "./ConfirmOrder.module.css"
import global from "../../styles/global.module.css"
import Button from "../../components/button/Button.tsx";
import confirmIcon from "../../assets/confirm.svg"
import heartSymbol from "../../assets/heartSymbol.svg"
import circleBG from "../../assets/backgrounds/circleBG.png"

const ConfirmOrder = () => {
    return (
        <Fragment>
            <main className={`${global.container} ${styles.center}`}>

                <section className={styles.confirmOrder}>

                    <h1 className={styles.confirmOrderTitle}>
                        Замовлення №0524 оформлено успішно <img alt="" src={confirmIcon} className={styles.confirmOrderConfirm}/>
                    </h1>

                    <p className={styles.confirmOrderText}>
                        Дані поступили в обробку, очікуйте дзвінок від оператора для підтвердження або SMS від служби доставки
                    </p>

                    <p className={styles.confirmOrderThanks}>
                        Дякуємо, що обрали нас
                        <img alt="💗" src={heartSymbol} className={styles.confirmOrderHeart}/>
                    </p>

                    <Button className={styles.confirmOrderButton}>На головну</Button>

                </section>

            </main>

            <img alt="" src={circleBG} className={styles.confirmOrderBackground1}></img>
            <img alt="" src={circleBG} className={styles.confirmOrderBackground2}></img>
        </Fragment>
    );
};

export default ConfirmOrder;