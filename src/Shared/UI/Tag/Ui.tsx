import React, { useState } from "react";
import './style.scss'

function Tag() {

    // Here we will change value of nameOfTag by props when we will create columns
    // and then we can access it
    const [nameOfTag, setNameOfTag] = useState<string>("Kossom Elsisi");

    return (
        <span className="my-tag">{nameOfTag}</span>
    );
}

export default Tag;
