import React, {FC} from "react";

import { EmployeesItem } from "@/entities/admin/employeesItem";
import { useThemeStore } from "@/shared/store/themeStore";
import { GlobalLoading} from "@/shared/ui";
import clsx from "clsx";
import { employeesCategories } from "../model/values.data";
import {EmployeesListProps} from "../model/types";
import styles from "./styles.module.scss";

const EmployeesList:FC<EmployeesListProps> = ({isLoading, data}) => {
   const theme = useThemeStore((state) => state.theme);


   if (!data?.length && !isLoading) return <h4 className="h4">У вас еще нет сотрудников</h4>

   return (
       <>
           {
               isLoading && <div className={styles.table__loading}><GlobalLoading type="default"/></div>
           }

           <div className={clsx(styles.table__border, styles[theme])}>
               {
                   !isLoading &&
                   <table className={styles.table}>
                       <thead>
                       <tr className={styles.table__thead}>
                           {employeesCategories.map((category) => (
                               <th className={styles.table__item} key={category}>
                                   {category}
                               </th>
                           ))}
                       </tr>
                       </thead>
                       <tbody className={styles.table__list}>
                       {data?.map((item, idx) => (
                           <EmployeesItem key={idx} {...item}/>
                       ))}
                       </tbody>
                   </table>
               }
           </div>
       </>
   );
};

export default EmployeesList;
