import styles from "./OrderForm.module.css"
import global from "../../styles/global.module.css"
import Input from "../../components/input/Input.tsx";

const OrderForm = () => {
    return (
        <main className={`${global.container} ${styles.orderFormContainer}`}>

            <form className={styles.orderForm}>

                <h1 className={styles.orderFormTitle}>Оформлення замовлення</h1>

                <section className={styles.orderFormContacts}>

                    <h2 className={styles.contactsTitle}>Ваші контактні дані<span style={{color: '#F77474'}}>*</span></h2>

                    <label htmlFor='lastName'>Прізвище</label>
                    <Input id='lastName' name="" $variant={"unchecked"} placeholder={" "}/>

                    <label htmlFor='firstName'>Ім’я</label>
                    <Input id='firstName' name="" $variant={"unchecked"} placeholder={" "}/>

                    <label htmlFor='phoneNumber' >Мобільний телефон</label>
                    <Input id='phoneNumber' name="" $variant={"unchecked"} placeholder={"+380"}/>

                </section>

                <section className={styles.orderFormDelivery}>

                </section>

                <section className={styles.orderFormSummary}>

                </section>

            </form>

            {/*<BasketCard productObj={{id: 1, image: zephyr.zephyr1, title: 'макаруни з ківі', inStock: 10, price: 100, isWeight: 100}}/>*/}

        </main>
    );
};

export default OrderForm;