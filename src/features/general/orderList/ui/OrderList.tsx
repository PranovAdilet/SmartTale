import React, { FC } from "react";
import { OrderItem } from "@/entities/general/orderItem";
import { Props } from "../model/types";
import styles from "./styles.module.scss";
import { CommonSkeleton } from "@/shared/ui";

const OrderList: FC<Props> = ({ data, isLoading, isError, type, isCurrent }) => {

   const readyData = isError ? (
      <h3 className="h3">Упс, произошла ошибка 😅</h3>
   ) : isLoading ? (
      [...Array(8)].map((_, i: number) => <CommonSkeleton key={i} type={type} />)
   ) : (
      data?.map((item, idx) => (
         <OrderItem key={idx} item={item} isCurrent={isCurrent} />
      ))
   );

   return <div className={styles.list}>{readyData}</div>;
};

export default OrderList;
