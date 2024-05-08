import React, { useState } from "react";
import './style.scss'
import { giveClassStatus } from "../../../../Shared/UI/Status/status";
import TaskCard from "../../../Task/Model/TaskCard/ui";

function ColumnCard() {

    //then we will take this value from user
    const [callOfColumn] = useState<string>("Done")


    return(
        <div className="column">
            <h3>{callOfColumn}</h3>
            <div className={giveClassStatus(callOfColumn, "cards")}>
                <TaskCard titleColumn={callOfColumn}/>
            </div>
        </div>
    )
}
export default ColumnCard;