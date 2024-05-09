import React, { cloneElement, useState } from "react";
import "./style.scss";
import { giveClassStatus } from "../../../../Shared/UI/Status/status";
import { ColumnItem } from "../../Modal/type";

interface ColumnCardProps extends ColumnItem {
  children: JSX.Element[];
}

function ColumnCard({ children, color, name }: ColumnCardProps) {
  //then we will take this value from user
  const [callOfColumn] = useState<string>("Done");

  return (
    <div className="column">
      <h3>{name}</h3>
      <div className={giveClassStatus(callOfColumn, "cards")}>
        {children.map((child) => {
          return cloneElement(child, {
            ...child.props,
            color: color,
          });
        })}

        {/* <TaskCard titleColumn={callOfColumn}/> */}
      </div>
    </div>
  );
}
export default ColumnCard;
