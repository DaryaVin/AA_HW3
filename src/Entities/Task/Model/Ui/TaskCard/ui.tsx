import React from "react";
import Status from "../../../../../Shared/UI/Status/status";
import "./style.scss";
import Tag from "../../../../../Shared/UI/Tag/Ui";
import { TaskItem } from "../../type";
import { Button } from "../../../../../Shared";

interface Props extends TaskItem {
  deleteFun: () => void;
  editFun: () => void;
  color: {
    r: number;
    g: number;
    b: number;
  };
  description: string;
  status: string;
}

const TaskCard = ({
  name,
  id,
  description,
  status,
  tags,
  color,
  deleteFun,
  editFun,
}: Props) => {
  const deleteCard = () => {
    deleteFun();
  };
  const editCard = () => {
    editFun();
  };

  return (
    <div className="card" id={id}>
      <div className="header">
        <h5 className="title">{name}</h5>
        <div className="edit-del">
          <Button
            onClick={editCard}
            className="edit-icon"
            label={
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.1614 0.984375C9.63789 0.984375 9.11484 1.18716 8.70825 1.59375L0.911377 9.39062L0.802002 9.5L0.770752 9.65625L0.223877 12.4062L0.067627 13.1406L0.802002 12.9844L3.552 12.4375L3.70825 12.4062L3.81763 12.2969L11.6145 4.5C12.4277 3.68682 12.4277 2.40693 11.6145 1.59375C11.2079 1.18716 10.6849 0.984375 10.1614 0.984375ZM10.1614 1.9375C10.4129 1.9375 10.668 2.05346 10.9114 2.29688C11.3982 2.7837 11.3982 3.31005 10.9114 3.79688L10.552 4.14062L9.06763 2.65625L9.41138 2.29688C9.65479 2.05346 9.90986 1.9375 10.1614 1.9375ZM8.3645 3.35938L9.84888 4.84375L3.802 10.8906C3.47482 10.2503 2.95792 9.73343 2.31763 9.40625L8.3645 3.35938ZM1.677 10.2188C2.27654 10.4617 2.74656 10.9317 2.9895 11.5312L1.34888 11.8594L1.677 10.2188Z"
                  fill="#6C6C6C"
                />
              </svg>
            }
          />
          <Button
            onClick={deleteCard}
            className="x-icon"
            label={
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.1145 4.375H5.83325V1.09375C5.83325 0.75 5.552 0.46875 5.20825 0.46875C4.8645 0.46875 4.58325 0.75 4.58325 1.09375V4.375H1.302C0.958252 4.375 0.677002 4.65625 0.677002 5C0.677002 5.34375 0.958252 5.625 1.302 5.625H4.58325V8.90625C4.58325 9.25 4.8645 9.53125 5.20825 9.53125C5.552 9.53125 5.83325 9.25 5.83325 8.90625V5.625H9.1145C9.45825 5.625 9.7395 5.34375 9.7395 5C9.7395 4.65625 9.45825 4.375 9.1145 4.375Z"
                  fill="#6C6C6C"
                />
              </svg>
            }
          />
        </div>
      </div>
      <p>{description}</p>
      <Status statusTask={status} color={color} />
      <ul className="tags">
        {tags.map((tag) => {
          return (
            <li key={tag}>
              <Tag nameOfTag={tag} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskCard;
