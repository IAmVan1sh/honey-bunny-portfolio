import {FC} from "react";
import styles from "./NavBar.module.css"
import global from "../../styles/global.module.css"
import {NavLink} from "react-router-dom";
import {BASKET_ROUTE, CATALOG_ROUTE, SHOP_ROUTE} from "../../utils/consts.ts";
import HeaderAssets from "../../assets/header/HeaderAssets.ts";
import Input from "../input/Input.tsx";

const NavBar: FC = () => {
    return (
        <header className={styles.navbar}>

            <nav className={`${styles.navbarInner} ${global.container}`}>

                <NavLink to={SHOP_ROUTE} className={styles.navbarLogo}>
                    <img alt="logo" src={HeaderAssets.logoSVG} className={styles.navbarLogoInner}/>
                </NavLink>

                <div className={styles.navbarLinks}>
                    <NavLink to={CATALOG_ROUTE} className={styles.navbarText}>Каталог товарів</NavLink>
                    <NavLink to="" className={styles.navbarText}>Доставка і оплата</NavLink>
                    <NavLink to="" className={styles.navbarText}>Корпоративні замовлення</NavLink>
                    <NavLink to="" className={styles.navbarText}>“Приготуй сам”</NavLink>
                    <NavLink to="" className={styles.navbarText}>Про нас</NavLink>
                </div>

                <div className={styles.navbarIcons}>
                    <Input $hide $shift={true}/>
                    <NavLink to={BASKET_ROUTE} className={styles.navbarIconsImgLink}>
                        <img className={styles.navbarIconsImg} alt="basket" src={HeaderAssets.basket}/>
                    </NavLink>
                </div>

            </nav>

        </header>
    );
};

export default NavBar;