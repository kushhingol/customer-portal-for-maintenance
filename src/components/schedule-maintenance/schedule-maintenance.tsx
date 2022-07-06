import React from "react";
import { useGetScheduleMaintenance } from "../../hooks/useGetScheduleMaintenance";
import { Button } from "../../shared/button/button";
import { LoadingSpinner } from "../../shared/loading-spinner/loading-spinner";
import { Table } from "../../shared/table/table";
import { getTitleCase } from "../../utils/utils";

const NoMaintenanceData: React.FC = () => (
  <div style={{ margin: "8px 0px" }}>
    <b>No Maintenance Data found</b>
  </div>
);

export const ScheduleMaintenance: React.FC = () => {
  const {
    data,
    isLoading,
    isRefetching,
    refetch: refetchScheduleMaintenance,
  } = useGetScheduleMaintenance();
  const maintenanceData = data?.body;
  const columns =
    maintenanceData && maintenanceData?.length > 0
      ? Object.keys(maintenanceData[0]).map((key) => {
          return {
            name: getTitleCase(key),
            selector: (row: any) => row[key],
          };
        })
      : [];

  return (
    <>
      <Button
        buttonName="Refetch"
        id="refetch-button"
        onClickHandler={refetchScheduleMaintenance}
      />
      {maintenanceData && maintenanceData.length > 0 ? (
        <Table
          columns={columns}
          data={maintenanceData}
          isLoading={isLoading || isRefetching}
        />
      ) : (
        <>
          {isLoading ? (
            <div>
              <LoadingSpinner />
            </div>
          ) : (
            <NoMaintenanceData />
          )}
        </>
      )}
    </>
  );
};
