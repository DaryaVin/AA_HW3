import React, { useState } from "react";
import './style.scss'

interface Props{
    nameOfTag: string;
}

const Tag: React.FC<Props> = (props) => {

    // Here we will change value of nameOfTag by props when we will create columns
    // and then we can access it
    const [nameTag] = useState<string>(props.nameOfTag);

    return (
        <span className="my-tag">{nameTag}</span>
    );
}

export default Tag;
