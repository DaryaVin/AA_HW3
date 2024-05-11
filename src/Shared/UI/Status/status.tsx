import React from "react";
import "./style.scss";

interface Props {
  statusTask: string;
  color: {
    r: number;
    g: number;
    b: number;
  };
}

const Status = ({ color, statusTask } : Props) => {
  return (
    <span
      className="status"
      id="status"
      style={{
        backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b}, 20%)`
      }}
    >
      <svg
        width="10"
        height="10"
        viewBox="0 0 8 9"
        fill={`rgb(${color.r}, ${color.g}, ${color.b})`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="4" cy="4.5" r="4" />
      </svg>
      {statusTask}
    </span>
  );
};
export default Status;
