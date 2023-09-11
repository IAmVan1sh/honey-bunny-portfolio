import styles from "./Loading.module.css"
import loading from "../../assets/loading.svg"

const Loading = () => {
    return (
        <main className={styles.loading}>

            <section className={styles.loadingContent}>

                <img alt="loading" src={loading} className={styles.loadingImg}/>

                <p className={styles.loadingText}>Будь ласка, зачекайте. Це може зайняти декілька хвилин.</p>

            </section>

        </main>
    );
};

export default Loading;