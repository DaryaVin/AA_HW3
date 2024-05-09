import React from "react";
import Status from "../../../../../Shared/UI/Status/status";
import "./style.scss";
import Tag from "../../../../../Shared/UI/Tag/Ui";
import { TaskItem } from "../../type";

interface Props extends TaskItem {
  color: {
    r: number;
    g: number;
    b: number;
  };
}

const TaskCard = ({ name, description, status, tag, color }: Props) => {

  return (
    <div className="card">
      <h5 className="title">{name}</h5>
      <p>{description}</p>
      <Status statusTask={status} color={color} />
      <ul className="tags">
        {tag.map((tag) => {
          return <li key={tag}><Tag nameOfTag={tag} /></li>;
        })}
      </ul>
    </div>
  );
};

export default TaskCard;
