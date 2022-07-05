import React from "react";
import "./loading-spinner.styles.css";

export const LoadingSpinner = () => {
  return (
    <div className="spinner-rolling">
      <div className="loading">
        <div></div>
      </div>
    </div>
  );
};
