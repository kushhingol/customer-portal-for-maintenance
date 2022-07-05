import React from "react";
import "./banner.styles.css";

type BannerProps = {
  title: string;
  onClose: () => void;
};

export const Banner: React.FC<BannerProps> = ({ title, onClose }) => {
  return (
    <div className="banner-container">
      <b>{title}</b>
      <button onClick={onClose} className="banner-button">x</button>
    </div>
  );
};
