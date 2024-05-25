import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { ItemProps } from "../model/types";
import { MODAL_KEYS, ROUTES } from "@/shared/lib";

import { useRouter } from "next/navigation";

import cardImage from "@@/imgs/order/equipment.png";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { showModal } from "@/views/modal";

import { usePathname } from "next/navigation";
import { orderValues } from "@/entities/general/orderItem/model/value.data";
import { useThemeStore } from "@/shared/themeStore";

const OrderItem: FC<ItemProps> = ({ item, isCurrent }) => {
   const theme = useThemeStore((state) => state.theme);
   const title = orderValues[item.service];

   const router = useRouter();
   const handleItemClick = () => {
      if (item.service === "Заказ") {
         router.push(ROUTES.ANNOUNCEMENT_DETAILS_ORDER + "/orderName");
      } else {
         router.push(ROUTES.ANNOUNCEMENT_DETAILS_EQUIPMENT + "/equipmentName");
      }
   };

   return (
      <>
         {item.service === "Оборудование" && (
            <div onClick={handleItemClick} className={clsx(styles.item, styles[theme])}>
               <div className={styles.item__left}>
                  <Image
                     className={styles.item__image}
                     src={cardImage}
                     alt="card"
                     width={75}
                     height={75}
                  />
                  <div className={styles.item__info}>
                     <p className={clsx(styles.item__subtitle, styles.item__subtitle_green)}>
                        {title}
                     </p>

                     <h6 className={styles.item__title}>{item.title}</h6>
                     <p className={styles.item__text}>{item.description}</p>
                  </div>
               </div>
               <p className={styles.item__detail}>Посмотреть детали</p>
               <span className={styles.item__date}>2 апреля 2024</span>
            </div>
         )}

         {item.service === "Заказ" && (
            <div onClick={handleItemClick} className={clsx(styles.item, styles[theme])}>
               <div className={styles.item__left}>
                  <Image
                     className={styles.item__image}
                     src={cardImage}
                     alt="card"
                     width={75}
                     height={75}
                  />
                  <div className={styles.item__info}>
                     <p className={styles.item__subtitle}>Заказ</p>
                     <h6 className={styles.item__title}>{item.title}</h6>
                     <p className={styles.item__text}>{item.description}</p>
                  </div>
               </div>
               <span className={styles.item__date}>2 апреля 2024</span>
               <div className={styles.item__box}>
                  <p className={styles.item__status}>{isCurrent && item.status}</p>
                  {!isCurrent && <p className={styles.item__detail}>Посмотреть детали</p>}
               </div>
            </div>
         )}
         {item.service === "Услуги" && (
            <div onClick={handleItemClick} className={clsx(styles.item, styles[theme])}>
               <div className={styles.item__left}>
                  <Image
                     className={styles.item__image}
                     src={cardImage}
                     alt="card"
                     width={75}
                     height={75}
                  />
                  <div className={styles.item__info}>
                     <p className={clsx(styles.item__subtitle, styles.item__subtitle_primary)}>
                        Услуга
                     </p>
                     <h6 className={styles.item__title}>{item.title}</h6>
                     <p className={styles.item__text}>{item.description}</p>
                  </div>
               </div>
               <span className={styles.item__date}>2 апреля 2024</span>
               <div className={styles.item__box}>
                  <p className={styles.item__status}>{isCurrent && item.status}</p>
                  {!isCurrent && <p className={styles.item__detail}>Посмотреть детали</p>}
               </div>
            </div>
         )}
      </>
   );
};

export default OrderItem;
