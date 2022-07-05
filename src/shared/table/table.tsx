import React from "react";
import { Column } from "./table.types";
import "./table.styles.css";
import { LoadingSpinner } from "../loading-spinner/loading-spinner";

type TableProps = {
  columns: Column[];
  data: any[];
  isLoading?: boolean;
};

export const Table: React.FC<TableProps> = ({
  columns,
  data,
  isLoading = false,
}) => {
  return (
    <div className="table-container">
      {!isLoading ? (
        <table className="styled-table ">
          <thead className="table-header">
            <tr>
              {columns.length > 0 &&
                columns.map((column, index) => (
                  <th key={column.name + index}>{column.name.toUpperCase()}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              data.map((row, index) => {
                return (
                  <tr key={index}>
                    {columns.length > 0 &&
                      columns.map((column, index) => (
                        <td key={column.name + index}>
                          {column.selector(row)}
                        </td>
                      ))}
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : (
        <LoadingSpinner />
      )}

    </div>
  );
};
