import React, { cloneElement, useState } from "react";
import "./style.scss";
import { ColumnItem } from "../../Modal/type";

interface ColumnCardProps extends ColumnItem {
    children: JSX.Element[];
}

function ColumnCard({ children, color, name , id , position}: ColumnCardProps) {

    return (
        <div className="column" id={id} >
            <h3>{name}</h3>
            <div className="cards" style={{
                backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b}, 20%)`
            }}>
                {children.map((child) => {
                    return cloneElement(child, {
                        ...child.props,
                        color: color,
                    });
                })}
            </div>
        </div>
    );
}
export default ColumnCard;
