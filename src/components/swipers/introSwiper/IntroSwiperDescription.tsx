import {FC} from "react";
import {DescriptionProps} from "../../../types/description.ts";
import styles from "./IntroSwiper.module.css"
import Button from "../../button/Button.tsx";

const IntroSwiperDescription: FC<DescriptionProps> = ({description, swiperIndex}) => {

    return (
        <section className={styles.introSwiperDescription}>

            <h1 className={styles.introSwiperHeader}>
                {description[swiperIndex].header}
            </h1>

            <p className={styles.introSwiperInner}>
                {description[swiperIndex].inner}
            </p>

            {description[swiperIndex].button ?
                <Button
                    className={styles.introSwiperButton}
                    onClick={() => console.log(swiperIndex)}
                >
                    {description[swiperIndex].buttonText}
                </Button>
                :
                null
            }

        </section>
    );
};

export default IntroSwiperDescription;