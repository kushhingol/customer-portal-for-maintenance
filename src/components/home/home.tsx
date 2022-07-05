import React from 'react';
import { ScheduleMaintenance } from '../schedule-maintenance/schedule-maintenance';

export const Home : React.FC = () => {
    return <>
      <h1>Welcome to Customer Portal</h1>
      <h2>Schedule Maintenance List</h2>
      <ScheduleMaintenance />
    </>
}