"use client";

import React, { FC } from "react";
import { StandartCard } from "@/features/user/standartCard";
import { CardSceletonProps } from "../model/types";
import { CommonSkeleton, GlobalLoading } from "@/shared/ui";
import { useInfiniteScroll } from "@/shared/lib/hooks/useInfiniteScroll";
import styles from "./styles.module.scss";

const CardsSection: FC<CardSceletonProps> = ({ fetchFunction, type }) => {
   const { observerTarget, data, isInitialLoading, isError, isLoading } =
      useInfiniteScroll(fetchFunction);
   //  const { observerTarget, data, isLoading, isError, isFirstLoading } =
   //      useInfiniteScroll2(fetchFunction);

   const readyData = isInitialLoading ? (
      [...Array(8)].map((_, i: number) => <CommonSkeleton key={i} type={type} />)
   ) : isError ? (
      <h3 className="h3">Упс, произошла ошибка 😅</h3>
   ) : data.length === 0 ? (
      <h3 className="h3">Упс, пусто 😅</h3>
   ) : (
      data?.map((item: any, i: number) => <StandartCard key={i} item={item} />)
   );

   return (
      <section className={styles.section}>
         <div className={styles.section__list}>{readyData}</div>

         <div className={styles.section__observer} ref={observerTarget}>
            {!isInitialLoading && isLoading && <GlobalLoading />}
            {/* {isLoading && !isInitialLoading && <GlobalLoading />} */}
         </div>
      </section>
   );
};

export default CardsSection;
