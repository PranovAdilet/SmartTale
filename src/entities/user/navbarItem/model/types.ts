import { LucideIcon } from "lucide-react";
export type RoutesType = {
   parentId: number;
   subtitle: string;
   link: string;
   authorized?: boolean;
   detailLink?: string
   isSubscribed?: boolean
};

export type TypeCategories = {
   id: number;
   title: string;
   Icon: LucideIcon;
   routes: RoutesType[];
   activeRoutes?: string[];
   authorized?: boolean;
   isSubscribed?: boolean
   role? : "authorized" | "subscribed" | "unAuthorized"
};
