import styles from "./Mistake.module.css";
import mistakeIcon from "../../assets/mistakeIcon.svg";
import Button from "../../components/button/Button.tsx";
import {Link, NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../../utils/consts.ts";

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
					<NavLink to={SHOP_ROUTE}>
						<Button reverseAnimation className={styles.mistakeButton}>На головну</Button>
					</NavLink>
					<Button reverseAnimation onClick={() => window.location.reload()} className={styles.mistakeButton}>Перезавантажити</Button>
				</section>

			</section>

		</main>
	);
};

export default Mistake;