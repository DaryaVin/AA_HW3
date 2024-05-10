import React from "react";
import "./style.scss";

interface Props {
  nameOfTag: string;
}

const Tag = ({ nameOfTag } : Props) => {
  return <span className="my-tag">{nameOfTag}</span>;
};

export default Tag;
