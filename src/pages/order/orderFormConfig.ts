import {OrderFormConfigType} from "../../types/orderFormTypes.ts";
import styles from "./OrderForm.module.scss"

const orderFormConfig: OrderFormConfigType = {
    contacts: [

        {
            name: 'lastName',
            id: 'lastName',
            type: 'text',
            $variant: 'unchecked',
            $bigMarginTop: styles.bigMargin,
            placeholder: ' ',
            label: "Прізвище",
            $rules: {
                required: {
                    value: true,
                    message: "The Last Name is required",
                },
            },
        },

        {
            name: 'firstName',
            id: 'firstName',
            type: 'text',
            $variant: 'unchecked',
            $bigMarginTop: styles.bigMargin,
            placeholder: ' ',
            label: "Ім’я",
            $rules: {
                required: {
                    value: true,
                    message: "The Last Name is required",
                },
            },
        },

        {
            name: 'phoneNumber',
            id: 'phoneNumber',
            type: 'tel',
            $variant: 'unchecked',
            $bigMarginTop: styles.bigMargin,
            placeholder: '+380',
            label: "Мобільний телефон",
            $rules: {
                required: {
                    value: true,
                    message: "The Last Name is required",
                },
            },
        },

    ],

    delivery: [

        {
            name: "deliveryService",
            id: "deliveryService1",
            type: "radio",
            value: 0,
            $bigMarginTop: styles.bigMargin,
            label: "Нова пошта (самовивіз із відділення)",
            $subtitle: "Служба доставки",
        },

        {
            name: "deliveryService",
            id: "deliveryService2",
            type: "radio",
            value: 1,
            label: "Нова пошта (кур’єр)",
        },

        {
            name: "deliveryService",
            id: "deliveryService3",
            type: "radio",
            value: 2,
            label: "Укрпошта",
        },

        {
            name: "paymentMethod",
            id: "paymentMethod1",
            type: "radio",
            value: "cash",
            $bigMarginTop: styles.bigMargin,
            label: "Накладений платіж",
            $subtitle: "Спосіб оплати",
        },

        {
            name: "paymentMethod",
            id: "paymentMethod2",
            type: "radio",
            value: "debit",
            label: "Карткою за реквізитами",
        },

        {
            name: "comment",
            id: "comment",
            type: "textarea",
            placeholder: "Можливо, ви хочете щось уточнити",
            label: "Коментар до замовлення",
            className: styles.orderFormComment,
        },

        {
            name: "DO_NOT_CALL_ME_BACK",
            id: "DO_NOT_CALL_ME_BACK",
            type: "checkbox",
            label: "Мені не потрібно передзвонювати",
        }

    ],

}

export default orderFormConfig;