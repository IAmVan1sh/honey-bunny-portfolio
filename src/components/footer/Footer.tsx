import {FC, useState} from "react";
import styles from "./Footer.module.scss";
import {Link, NavLink} from "react-router-dom";
import {CATALOG_ROUTE, SHOP_ROUTE} from "../../utils/consts.ts";
import Input from "../input/Input.tsx";
import {SocialAssets} from "../../assets/social/SocialAssets.ts";
import {useRegisterMutation} from "../../store/api/user.api.ts";

const Footer: FC = () => {
	const [value, setValue] = useState<string>("");
	const [registerUser, {isSuccess, error}] = useRegisterMutation();
	const [modal, setModal] = useState<boolean>(false);

	return (
		<footer className={styles.footer}>

			<div className={styles.footerContent}>

				<div className={styles.footerGeneralContent}>

					<section className={styles.footerNav}>
						<h4 className={styles.footerTitle}>Карта сайту</h4>
						<NavLink to={CATALOG_ROUTE} className={styles.footerText}>Каталог товарів</NavLink>
						<NavLink to={SHOP_ROUTE} className={styles.footerText}>Доставка і оплата</NavLink>
						<NavLink to="" className={styles.footerText}>Корпоративні замовлення</NavLink>
						<NavLink to="" className={styles.footerText}>“Приготуй сам”</NavLink>
						<NavLink to="" className={styles.footerText}>Про нас</NavLink>
					</section>

					<section className={styles.footerContacts}>
						<div className={styles.footerContactsNumbers}>
							<h4 className={styles.footerTitle}>Контакти </h4>
							<div className={styles.footerText}>+380 (67) 538-19-16</div>
							<div className={styles.footerText}>+380 (68) 144-19-15</div>
							<div className={styles.footerText}>honeybunny@gmail.com</div>
						</div>

						<div className={styles.footerContactsAddresses}>
							<h4 className={styles.footerTitle}>Адреси</h4>
							<div className={styles.footerText}>Кіїв</div>
							<div className={styles.footerText}>Одеса</div>
							<div className={styles.footerText}>Львів</div>
						</div>

						<Input
							className={styles.footerContactsSearch}
							variant="transparent"
							placeholder="Знайти смаколик"
						/>
					</section>

					<section className={styles.footerSocials}>

						<h4 className={styles.footerTitle}>Наші соціальні мережі</h4>

						<div className={styles.footerSocial}>
							{SocialAssets.socials.map(social =>
								<Link
									key={social.id}
									to={social.url}
									className={styles.footerSocialItem}
								>
									<img
										alt={social.alt}
										src={social.image}
										className={styles.footerSocialImg}
									/>
								</Link>
							)}
						</div>

						<h4 className={styles.footerTitle} id={styles.footerSubscribe}>Слідкуй за оновленнями</h4>

						<div style={{position: "relative"}}>
							<Input
								isAlreadyReceives={!isSuccess}
								className={styles.footerSocialsSearch}
								variant={error ? "warning" : isSuccess ? "transparent-checked" : "transparent-next"}
								type="email"
								placeholder="Введіть ваш E-mail"
								value={value}
								onChange={event => setValue(event.target.value)}
								buttonClick={() => registerUser({ email: value }).then(value => {
									if (value.data) {
										setModal(true);
									}
								})}
							/>
							{isSuccess ?
								<p className={styles.emailMessage}>email registered but not validated!</p>
								:
								error ?
									<p className={styles.emailMessage}>{error.data?.message}</p>
									:
									<p className={styles.emailMessage}></p>
							}
						</div>

					</section>

				</div>

				<p className={styles.footerCopyright}>Honey Bunny 2022. Всі права захищені</p>

			</div>

			{/* MODAL */}

			{modal &&
				<div className={styles.modal} onClick={() => {
					setModal(false);
				}}>
					<section onClick={event => event.stopPropagation()}>
						<h1>We sent a validation link to your email. Validate your email to start receiving news !</h1>
					</section>
				</div>
			}

		</footer>
	);
};

export default Footer;