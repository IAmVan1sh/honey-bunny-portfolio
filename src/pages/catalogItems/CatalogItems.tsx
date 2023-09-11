import {useLocation} from "react-router-dom";
import styles from "./CatalogItems.module.css"
import global from "../../styles/global.module.css"
import productData, {productSets, productTitles} from "../../assets/tastes/productCardObj.ts";
import {Fragment} from "react";
import ProductCard from "../../components/productCard/ProductCard.tsx";

const CatalogItems = () => {
    const currentLocation = useLocation().pathname.split("/")[useLocation().pathname.split("/").length = 1]

    return (
        <main className={styles.catalogItems}>
            <div className={global.container}>

                <h1 className={`${styles.catalogItemsTitle} ${global.pinkBubble}`}>
                    {productTitles[currentLocation as keyof typeof productTitles]}
                </h1>

                <section className={styles.catalogItemsItem}>

                    {currentLocation !== 'sets' ?

                        productData[currentLocation as keyof typeof productData].map(prod =>
                            <ProductCard productObj={prod}></ProductCard>
                        )

                        :

                        <Fragment>

                            <h2 className={styles.catalogItemsSubtitle}>На вагу</h2>

                            <section className={`${styles.catalogItemsItem} ${styles.lessMarginTop}`}>
                                {productSets.byWeight.map(prod =>
                                    <ProductCard productObj={prod}></ProductCard>
                                )}
                            </section>

                            <h2 className={`${styles.catalogItemsSubtitle} ${styles.biggerMarginTop}`}>Розфасовані (у боксах)</h2>

                            <section className={`${styles.catalogItemsItem} ${styles.lessMarginTop}`}>
                                {productSets.prePackaged.map(prod =>
                                    <ProductCard productObj={prod}></ProductCard>
                                )}
                            </section>

                        </Fragment>
                    }

                </section>

            </div>
        </main>
    );
};

export default CatalogItems;