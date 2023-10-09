import styles from "./OrderForm.module.scss";
import global from "../../styles/global.module.css";
import Input from "../../components/input/Input.tsx";
import {Controller, useForm} from "react-hook-form";
import {DevTool} from "@hookform/devtools";
import Button from "../../components/button/Button.tsx";
import orderFormConfig from "./orderFormConfig.ts";
import {FC, Fragment} from "react";
import OrderFormInputs from "../../types/orderFormTypes.ts";
import {useAppSelector} from "../../store/hooks.ts";
import BasketCard from "../../components/basketCard/BasketCard.tsx";

const OrderForm: FC = () => {
	
	const basket = useAppSelector(state => state.basket);
	
	const {
		handleSubmit,
		control
	} = useForm<OrderFormInputs>({
		defaultValues: {
			lastName: "",
			firstName: "",
			phoneNumber: "",
			city: "",
			deliveryService: 0,
			paymentMethod: 1,
			comment: "",
			DO_NOT_CALL_ME_BACK: "",
		}
	});

	return (
		<main className={`${global.container} ${styles.orderFormContainer}`}>

			<form
				onSubmit={handleSubmit(data => console.log(data))}
				noValidate
			>

				<h1 className={styles.orderFormTitle}>Оформлення замовлення</h1>

				<section>

					<h2 className={`${styles.orderFormChildTitle} ${global.pinkBubble}`}>Ваші контактні дані<span style={{color: "#F77474"}}>*</span></h2>

					{orderFormConfig.contacts.map(props =>
						<Fragment key={props.name}>

							<div className={[
								styles.orderFormInputContainer,
								(props.$bigMarginTop || ""),
							].join(" ")}>

								<label htmlFor={props.id} className={styles.orderFormLabel}>{props.label}</label>

								<Controller
									control={control}
									name={props.name}
									render={({ field: {onChange, onBlur, value} }) => (
										<Input
											{...{onChange, onBlur, value}}
											{...props}
											className={`${styles.orderFormInput} ${props.className}`}
										/>
									)}
									rules={props.$rules}
								/>

							</div>

						</Fragment>
					)}

				</section>

				<section>

					<h2 className={`${styles.orderFormChildTitle} ${global.pinkBubble}`}>Доставка<span style={{color: "#F77474"}}>*</span></h2>

					{orderFormConfig.delivery.map(({$rules,...props}, index) =>
						<Fragment key={props.name + index}>

							{props.$subtitle &&
                                <h4 className={styles.orderFormChildSubtitle}>{props.$subtitle}</h4>
							}

							<div className={[
								styles.orderFormInputContainer,
								((props.type === "radio" || props.type === "checkbox") && styles.flexReverse),
								(props.$bigMarginTop || ""),
							].join(" ")}
							style={props.type === "textarea" && {marginTop: "4.861vw"} || {}}
							>

								<label
									htmlFor={props.id}
									className={(props.type === "radio" || props.type === "checkbox") &&
                                        styles.orderFormLabelRC ||
                                        styles.orderFormLabel
									}
								>{props.label}</label>

								<Controller
									control={control}
									name={props.name}
									render={({ field: {onChange, onBlur, value}}) =>
										props.type === "textarea" ?
											<textarea
												{...{onChange, onBlur, value}}
												id={props.id}
												placeholder={props.placeholder}
												className={`${styles.orderFormInput} ${props.className}`}
											/>
											:
											<Input
												{...{onChange, onBlur, value}}
												{...props}
												className={`${styles.orderFormInput} ${props.className}`}
											/>
									}
									rules={$rules}
								/>

							</div>

						</Fragment>
					)}

				</section>

				<section>

					<h2 className={`${styles.orderFormChildTitle} ${global.pinkBubble}`}>Підсумок</h2>

					<div className={styles.orderFormSummary}>

						<p className={`${styles.orderFormSummaryKey} ${styles.key1}`}>Товар:</p>
						<p className={`${styles.orderFormSummaryKey} ${styles.key2}`}>Вартість доставки:</p>
						<p className={`${styles.orderFormSummaryKey} ${styles.key3}`}>Всього до сплати:</p>

						<p className={`${styles.orderFormSummaryData} ${styles.data1}`}>Печиво кокосове, Макаруни з ківі</p>
						<p className={`${styles.orderFormSummaryData} ${styles.data2}`}>За тарифами перевізника (70 грн.)</p>
						<p className={`${styles.orderFormSummaryData} ${styles.data3}`}>180 грн.</p>


					</div>

				</section>

				<Button type="submit" className={styles.orderFormButton}>Підтвердити</Button>

			</form>
			<DevTool control={control}/>

			<section className={styles.orderFormBasket}>
				{basket.map(productCard =>
					<BasketCard key={productCard.id} productObj={productCard}/>
				)}
			</section>

		</main>
	);
};

export default OrderForm;