import {FC} from "react";
import styles from "./Footer.module.scss"
import {Link, NavLink} from "react-router-dom";
import {CATALOG_ROUTE, SHOP_ROUTE} from "../../utils/consts.ts";
import Input from "../input/Input.tsx";
import {SocialAssets} from "../../assets/social/SocialAssets.ts";

const Footer: FC = () => {
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
                            $variant="transparent"
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

                        <Input
                            className={styles.footerSocialsSearch}
                            $variant="transparent-next"
                            type="email"
                            placeholder="Введіть ваш E-mail"
                        />

                    </section>

                </div>

                <p className={styles.footerCopyright}>Honey Bunny 2022. Всі права захищені</p>

            </div>

        </footer>
    );
};

export default Footer;