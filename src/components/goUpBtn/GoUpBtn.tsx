import styles from "./GoUpBtn.module.css"

const GoUpBtn = () => {
    return (
        <button className={styles.goUpButton} onClick={() => {
            scrollTo(0, 0)
        }}/>
    );
};

export default GoUpBtn;