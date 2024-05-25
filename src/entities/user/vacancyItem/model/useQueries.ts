import { useMutation, useQuery } from "@tanstack/react-query";
import { ResumeQueryKeys, ServiceQueryKeys } from "@/shared/api";
import { ResumeService, VacancyService } from "@/shared/lib";

export const useGetVacancies = (page: number) => {
   return useQuery({
      queryFn: () => VacancyService.getVacancies(page),
      queryKey: [ServiceQueryKeys.SERVICES],
   });
};
export const useAddVacancy = () => {
   return useMutation({
      mutationFn: (data: any) => VacancyService.addVacancy(data),
      mutationKey: [ServiceQueryKeys.SERVICES],
   });
};
export const useAddResume = () => {
   return useMutation({
      mutationFn: (data: any) => ResumeService.addResume(data),
      mutationKey: [ResumeQueryKeys.RESUME],
   });
};