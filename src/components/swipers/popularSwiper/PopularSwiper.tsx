import {FC} from "react";
import styles from "./PopularSwiper.module.css"
import {Navigation} from "swiper/modules";
import productData from "../../../assets/tastes/productCardObj.ts";
import ProductCard from "../../productCard/ProductCard.tsx";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';

const PopularSwiper: FC = () => {
    return (
        <section>
            <h2 className={styles.popularTitle}>Популярні товари</h2>

            <Swiper
                className={styles.popularSwiper}
                modules={[ Navigation ]}
                navigation
                spaceBetween={30}
                slidesPerView={4}
                slidesPerGroup={4}
            >
                {productData.popular.map((prod) =>
                    <SwiperSlide key={prod.id} className={styles.popularSwiperSlide} >
                        <ProductCard productObj={prod} className={styles.popularSwiperProdCard}></ProductCard>
                    </SwiperSlide>
                )}
            </Swiper>
        </section>
    );
};

export default PopularSwiper;