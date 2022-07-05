import { getBaseURL } from "../utils/utils"
import axios from 'axios';
import { GetMainteanceScheduleResponse } from "./api.types";

const baseURL = getBaseURL();

/**
 * @desc: Function is defined to fetch all schedule maintenance list data
 * @returns :  Promise<GetMainteanceScheduleResponse>
 */
export const fetchAllScheduleMaintenanceList = async () : Promise<GetMainteanceScheduleResponse> => {
    const response = await axios.get(`${baseURL}/api/maintenance/get-all-mainteance`);
    return response.data
}