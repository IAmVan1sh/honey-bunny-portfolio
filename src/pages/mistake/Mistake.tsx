import styles from "./Mistake.module.css"
import mistakeIcon from "../../assets/mistakeIcon.svg"
import Button from "../../components/button/Button.tsx";
import {Link} from "react-router-dom";

const Mistake = () => {
    return (
        <main className={styles.mistake}>

            <section className={styles.mistakeContent}>

                <img alt="Wrong!" src={mistakeIcon} className={styles.mistakeImg}/>

                <h1 className={styles.mistakeTitle}>
                    От халепа! Щось пішло не так...
                </h1>

                <p className={styles.mistakeText}>
                    Будь ласка, перевірте своє підключення до мережі або перезавантажте сторінку. Якщо це не спрацювало – зверніться <Link to="/" className={styles.mistakeTextLink}>сюди</Link>.
                </p>

                <section className={styles.mistakeNav}>
                    <Button className={styles.mistakeButton}>На головну</Button>
                    <Button className={styles.mistakeButton}>Перезавантажити</Button>
                </section>

            </section>

        </main>
    );
};

export default Mistake;