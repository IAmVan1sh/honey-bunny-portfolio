import IntroSwiper from "../../components/swipers/introSwiper/IntroSwiper.tsx";
import CatalogGrid from "../../components/catalogGrid/CatalogGrid.tsx";
import PopularSwiper from "../../components/swipers/popularSwiper/PopularSwiper.tsx";
import Achievements from "../../components/achievements/Achievements.tsx";
import FeedBack from "../../components/feedBack/FeedBack.tsx";
import Bonus from "../../components/bonus/Bonus.tsx";
import GoUpBtn from "../../components/goUpBtn/GoUpBtn.tsx";
import {FC} from "react";
import styles from "./Shop.module.css";

const Shop: FC = () => {
	return (
		<main className={styles.shop}>
			<IntroSwiper />
			<CatalogGrid middle />
			<PopularSwiper />
			<Achievements />
			<FeedBack />
			<Bonus />
			<GoUpBtn />
		</main>
	);
};

export default Shop;