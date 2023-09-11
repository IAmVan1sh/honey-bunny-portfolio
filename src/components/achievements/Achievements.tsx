import {FC} from "react";
import styles from "./Achievements.module.css"
import backgrounds from "../../assets/backgrounds/backgrounds.ts";
import AchievementsAssets from "../../assets/achievements/AchievementsAssets.ts";

const Achievements: FC = () => {
    return (
        <section className={styles.achievements}>

            <h2 className={styles.achievementsTitle}>Наші переваги та досягнення</h2>

            <div
                className={styles.achievementsItems}
                style={{
                    background: `url(${backgrounds.achievementsBigCurveLine}) center no-repeat`,
                    backgroundSize: '100% 100%'
                }}
            >
                {AchievementsAssets.map(item =>
                    <div key={item.id} className={styles.achievementsItem}>

                        <img
                            className={styles.achievementsImg}
                            alt={item.image}
                            src={item.image}
                        />

                        <p className={styles.achievementsSubtitle}>{item.subtitle}</p>

                    </div>
                )}
            </div>

        </section>
    )
};

export default Achievements;