import React from "react";
import Status from "../../../../Shared/UI/Status/status";
import "./style.scss";
import Tag from "../../../../Shared/UI/Tag/Ui";
import { TaskItem } from "../type";

interface Props extends TaskItem {
  // titleColumn: string;
  color: string;
  // description: string;
}

const TaskCard = ({ name, description, status, tag, color }: Props) => {
  // const [title] = useState<string>("Make a nice background");
  // const [description] = useState<string>(
  //   "Hope this simple kanban helps in running the UX processes without leaving figma"
  // );
  // const [status] = useState(props.titleColumn);
  return (
    <div className="card">
      <h5 className="title">{name}</h5>
      <p>{description}</p>
      <Status statusTask={status} color={color} />
      <ul className="tags">
        {tag.map((tag) => {
          return <li key={tag}>{tag}</li>;
        })}
        <Tag nameOfTag="Kossom Elsisi" />
        <Tag nameOfTag="Kossom Elsisi" />
      </ul>
    </div>
  );
};

export default TaskCard;
