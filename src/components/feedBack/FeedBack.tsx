import {FC} from "react";
import styles from "./FeedBack.module.css"
import global from "../../styles/global.module.css"
import {SocialAssets} from "../../assets/social/SocialAssets.ts";
import {Link} from "react-router-dom";

const FeedBack: FC = () => {
    return (
        <section className={styles.feedBack}>

            <div className={`${global.container} ${styles.feedBackContainer}`}>

                <section className={styles.feedBackContent}>

                    <h2 className={styles.feedBackTitle}>Відгуки</h2>

                    <p className={styles.feedBackInner}>Переглянути відгуки можна на сторінках нашого магазину в соціальних мережах за посиланнями:</p>

                    <section className={styles.feedBackSocials}>
                        {SocialAssets.socialCircles.map(social =>
                            <Link key={social.image} to={social.url} className={styles.feedBackSocial}>
                                <img alt={social.url} src={social.image}/>
                            </Link>
                        )}
                    </section>

                </section>

                <section className={styles.feedBackComments}>

                    <div className={styles.feedBackCommentsGroup1}>
                        <img alt={SocialAssets.comments[0]} src={SocialAssets.comments[0]} className={styles.feedBackCommentsImg} />
                        <img alt={SocialAssets.comments[1]} src={SocialAssets.comments[1]} className={styles.feedBackCommentsImg} />
                    </div>

                    <div className={styles.feedBackCommentsGroup2}>
                        <img alt={SocialAssets.comments[2]} src={SocialAssets.comments[2]} className={styles.feedBackCommentsImg} />
                        <img alt={SocialAssets.comments[3]} src={SocialAssets.comments[3]} className={styles.feedBackCommentsImg} />
                    </div>

                </section>

            </div>

        </section>
    );
};

export default FeedBack;