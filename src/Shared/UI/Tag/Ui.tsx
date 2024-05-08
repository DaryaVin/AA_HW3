import React, { useState } from "react";
import './style.scss'

function Tag() {

    const [nameOfTag, setNameOfTag] = useState<string>("Kossom Elsisi");

    return (
        <span className="my-tag">{nameOfTag}</span>
    );
}

export default Tag;
