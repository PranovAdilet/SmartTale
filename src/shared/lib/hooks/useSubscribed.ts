"use client";

import { useGetProfile } from "@/widgets/user/profile/model/useQueries";
import { useSubscribeStore } from "@/shared/store/subscribeStore/subscribeStore";
import { useEffect } from "react";
import { useAuth } from "@/shared/lib";

interface PositionsTypes {
   organization: string;
   job_title: string;
}

export function useSubscribed() {
   const { isAuth } = useAuth();

   const { data, isLoading, isSuccess, isError } = useGetProfile(isAuth);
   const setSubscribeState = useSubscribeStore((state) => state.setSubscribeState);

   useEffect(() => {
      if (isSuccess && data) {
         const position = data?.job_titles.find((item) => {
            return item?.organization === data?.org.title
         });
         const updatedPosition = {
            ...position,
            slug: data.org.slug
         };
         setSubscribeState({
            data: data,
            //@ts-ignore
            position: updatedPosition, //{...position, slug: data?.org.slug}
            isError: false,
            isSubscribe: data?.is_subbed,
         });
      }
      if (isError) {
         setSubscribeState({
            isError: isError,
         });
      }
      // eslint-disable-next-line
   }, [isSuccess, data, isError]);

   const isSubscribe = data?.is_subbed;

   const positions = data?.job_titles as PositionsTypes[];

   return {
      isSubscribe,
      isLoading,
      positions,
      isSuccess,
      isError,
      data,
      subscribed: { subscription: "" },
   };
}
