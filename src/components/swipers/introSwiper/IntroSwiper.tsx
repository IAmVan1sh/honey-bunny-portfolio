import {FC, useState} from "react";
import styles from "./IntroSwiper.module.css";
import introImages from "../../../assets/intro/introImages.ts";
import IntroSwiperDescription from "./IntroSwiperDescription.tsx";
import introSwiperText from "../../../assets/intro/introSwiperText.ts";
import {Autoplay, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const IntroSwiper: FC = () => {
	const [swiperIndex, setSwiperIndex] = useState<number>(0);

	return (
		<section>
			<Swiper
				modules={[ Autoplay, Pagination ]}
				className={styles.introSwiper}
				slidesPerView={1}
				loop
				autoplay={{
					delay: 5000,
					disableOnInteraction: true
				}}
				pagination={{
					clickable: true,
				}}
				onActiveIndexChange={swiper => setSwiperIndex(swiper.realIndex)}
			>
				{introImages.map(slide =>
					<SwiperSlide
						key={slide}
						style={{position: "relative"}}
					>
						<img className={styles.introSwiperImg} alt="intro" src={slide}/>
					</SwiperSlide>
				)}
				<div className={styles.introSwiperImgMask}></div>
				<IntroSwiperDescription description={introSwiperText} swiperIndex={swiperIndex}/>
			</Swiper>
		</section>
	);
};

export default IntroSwiper;