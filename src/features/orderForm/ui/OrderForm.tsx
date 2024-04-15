import React, {FC} from 'react';
import {Button, InputField, Select, TextArea} from "@/shared/ui";
import {AddImages} from "@/features/addImages";
import {OrderProps} from "../index";
import styles from "./styles.module.scss";

const OrderForm: FC<OrderProps> = ({type}) => {
    return (
        <form>
            <div className={styles.order}>
                <InputField
                    classname={styles.order__margin}
                    disabled={false}
                    type="text"
                    error="errror"
                    title="Название"
                />
                <TextArea
                    disabled={false}
                    error="errror"
                    title="Описание"
                />
                {
                    type === "order" &&
                    <InputField
                        classname={styles.order__margin}
                        disabled={false}
                        type="text"
                        error="error"
                        title="Размеры"
                    />
                }


                <InputField
                    classname={styles.order__margin}
                    disabled={false}
                    type="number"
                    title="Стоимость в сомах"
                />

                {
                    type === "order" &&
                    <div className={styles.order__block}>
                        <h3 className="h3">Крайняя дата выполнения</h3>
                        <div className={styles.order__date}>
                            <Select
                                classname={styles.order__margin}
                                value="30"
                                title="День"
                            />
                            <Select
                                classname={styles.order__margin}
                                value="Апрель"
                                title="Месяц"
                            />
                            <Select
                                classname={styles.order__margin}
                                value="2024"
                                title="Год"
                            />
                        </div>
                    </div>
                }
                <div className={styles.order__block}>
                    <h3 className="h3">Галерея фотографий</h3>
                    <AddImages/>
                </div>

                <div className={styles.order__block}>
                    <h3 className="h3">Контактная информация</h3>
                    <InputField
                        classname={styles.order__margin}
                        disabled={false}
                        type="phone"
                        title="Номер телефона"
                    />
                </div>
            </div>
            <Button className={styles.order__button}>Разместить объявление</Button>
        </form>
    );
};

export default OrderForm;