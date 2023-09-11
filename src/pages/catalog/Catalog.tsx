import {FC} from "react";
import styles from "./Catalog.module.css"
import global from "../../styles/global.module.css"
import CatalogGrid from "../../components/catalogGrid/CatalogGrid.tsx";

const Catalog: FC = () => {
    return (
        <main className={styles.catalog}>

            <section className={global.container}>

                <h1 className={`${styles.catalogTitle} ${global.pinkBubble}`}>Каталог товарів:</h1>

                <CatalogGrid className={styles.catalogGrid}/>

                <h2 className={`${styles.descriptionTitle} ${global.pinkBubble}`}>Смачно та корисно</h2>
                <p className={styles.description}>Ми попіклувалися про здоров’я наших покупців, то ж кожен смаколик виготовлений з любов’ю нашими кваліфікованими кондитерами, які вдосконалили класичні рецепти та додали твоїм улюбленим цукеркам користі, при цьому зберігаючи неймовірний смак.</p>

                <h2 className={`${styles.descriptionTitle} ${global.pinkBubble}`}>Перевага нашої рецептури</h2>
                <p className={styles.description}>У складі кондитерських виробів <span style={{color: '#FF8EB4', fontWeight: '700'}}>Honey Bunny</span> лише якісні продукти. Деякі складники замінені на більш корисну їм альтернативу. Через це їх можна їсти навіть якщо ти не вживаєш цукор, слідкуєш за фігурою, підраховуєш калорії. А ще можна просто побалувати себе чимось смачненьким ;)</p>

                <h2 className={`${styles.descriptionTitle} ${global.pinkBubble}`}>Ми прагнемо розвиватись</h2>
                <p className={styles.description}>Вибір товарів доволі різноманітний. Але ми прагнемо розвиватися далі та поповнювати різні категорії новими смаками та розширювати асортимент корисних смаколиків. Наші кондитери працюють над новими рецептами, від яких ти будеш у захваті. За всіма новинами ти можеш слідкувати в нашому <a href="https://google.com" className={styles.descriptionLinks}>Instagram</a> та <a href="https://google.com" className={styles.descriptionLinks}>Facebook</a>.</p>

            </section>

        </main>
    );
};

export default Catalog;