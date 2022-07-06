export type MaintenanceScheduleType = {
    name: string;
    start_date: string;
    start_time: string;
    end_date: string;
    end_time: string;
}

export type GetMainteanceScheduleResponse = {
  message: string;
  status: string;
  statusCode: number;
  body: MaintenanceScheduleType[]
};
