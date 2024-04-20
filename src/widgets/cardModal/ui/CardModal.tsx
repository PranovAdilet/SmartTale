"use client";

import { FC, useState } from "react";
import { usePathname } from "next/navigation";
import { CardSlider } from "@/features/cardSlider";
import { ModalCardHeader } from "@/entities/modalCardHeader";
import { AuthorInfo } from "@/entities/authorInfo";
import { CardCategory } from "@/features/cardCategory";
import { Button } from "@/shared/ui";
import styles from "./styles.module.scss";
import { DASHBOARD, ROUTES } from "@/shared/lib";
import clsx from "clsx";
import Link from "next/link";
import { closeModal } from "@/widgets/modal";
import { images } from "@/shared/lib";

const CardModal: FC = () => {
   const [selectedCategory, setSelectedCategory] = useState("ОПИСАНИЕ");

   const pathname = usePathname();

   const handleCategoryClick = (category: string) => {
      setSelectedCategory(category);
   };

   return (
      <div className={styles.modal}>
         <CardSlider images={images} />
         <div className={styles.modal__body}>
            <div className={styles.modal__header}>
               <ModalCardHeader title="Профессиональные спицы для вязания" cost="1000" />
            </div>
            <div className={styles.modal__info}>
               <AuthorInfo fullName="Sandy Wilder Cheng" avatarImg="" />
               <div className={styles.modal__category}>
                  <CardCategory
                     handleCategoryClick={handleCategoryClick}
                     selectedCategory={selectedCategory}
                  />
                  <div className={styles.modal__descr}>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                     nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </div>
               </div>

               <div className={styles.modal__btns}>
                  {pathname === DASHBOARD.PURCHASES ? (
                     <Link
                        onClick={closeModal}
                        href={ROUTES.CARD_DETAILS + "/detailCardName"}
                        className={styles.modal__btn}>
                        Подробнее
                     </Link>
                  ) : (
                     <>
                        <Button>Принять заказ</Button>
                        <Link
                           onClick={closeModal}
                           href={ROUTES.CARD_DETAILS + "/detailCardName"}
                           className={styles.modal__btn}>
                           Подробнее
                        </Link>
                     </>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default CardModal;
