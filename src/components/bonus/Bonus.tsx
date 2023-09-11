import styles from "./Bonus.module.css"
import Button from "../button/Button.tsx";

const Bonus = () => {
    return (
        <section className={styles.bonus}>

            <div className={styles.bonusBackground}></div>

            <section className={styles.bonusContent}>

                <h2 className={styles.bonusTitle}>Програма Бонус+</h2>

                <p className={styles.bonusSubtitle}>Після 3-го замовлення 2-й товар у подарунок*</p>

                <Button className={styles.bonusButton}>До каталогу</Button>

                <p className={styles.bonusDescription}>*При третьому замоленні, наприклад, бананового зефіру, в подарунок додається той самий продукт, тобто ще одна порція бананового зефіру</p>

            </section>

        </section>
    );
};

export default Bonus;