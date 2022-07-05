import { useQuery, UseQueryResult } from "react-query";
import { GetMainteanceScheduleResponse } from "../api/api.types";
import { fetchAllScheduleMaintenanceList } from "../api/schedule-maintenance.api";

export const useGetScheduleMaintenance = () : UseQueryResult<GetMainteanceScheduleResponse, unknown> => {
  return useQuery("get-schedule-maintenance", fetchAllScheduleMaintenanceList, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
