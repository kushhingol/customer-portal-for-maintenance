export type MaintenanceScheduleType = {
    name: string;
    startDate: string;
    startTime: string;
    endDate: string;
    endTime: string;
}

export type GetMainteanceScheduleResponse = {
  message: string;
  status: string;
  statusCode: number;
  body: MaintenanceScheduleType[]
};
