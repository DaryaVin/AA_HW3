import React, { useState } from "react";
import './style.scss'
import { giveClassStatus } from "../../../../Shared/UI/Status/status";

function ColumnCard() {

    //then we will take this value from user
    const [callOfColumn] = useState<string>("Ready")


    return(
        <div className="column">
            <h3>{callOfColumn}</h3>
            <div className={giveClassStatus(callOfColumn, "cards")}>Cards</div>
        </div>
    )
}
export default ColumnCard;