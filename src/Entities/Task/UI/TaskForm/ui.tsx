import React, { useEffect, useState } from "react";
import "./style.scss";
import { TaskItem } from "../../Model/type";
import { Button, Form, Input, ValidationWrap } from "../../../../Shared";

type TaskFormProps = (
  | {
      initialTaskItem: TaskItem;
      status?: string;
    }
  | {
      initialTaskItem?: TaskItem;
      status: string;
    }
) & {
  name: string;
  saveFunc: (item: TaskItem) => void;
  canselFunc: () => void;
};
export const TaskForm = ({
  initialTaskItem,
  status,
  name,
  saveFunc,
  canselFunc,
}: TaskFormProps) => {
  const initialValue: TaskItem =
    initialTaskItem ||
    ({
      id: "",
      name: "",
      description: "",
      tags: [],
      status: status,
    } as TaskItem);
  const [taskItem, setTaskItem] = useState<TaskItem>(initialValue);
  const [isValidName, setIsValidName] = useState<boolean>(true);
  const [isValidDescription, setIsValidDescription] = useState<boolean>(true);
  const [isValidTags, setIsValidTags] = useState<boolean[]>(
    Array(taskItem.tags.length).fill(true)
  );

  const [formDirty, setFormDirty] = useState<boolean>(false);
  const [onClickSaveBtn, setOnClickSaveBtn] = useState<boolean>(false);

  useEffect(() => {
    if (formDirty && onClickSaveBtn) {
      let isValidForm = isValidName && isValidDescription;

      if (isValidForm) {
        Object.values(isValidTags).forEach((valid) => {
          isValidForm = valid && isValidForm;
        });
      }

      if (isValidForm) {
        saveFunc(taskItem);
      }
      setOnClickSaveBtn(false);
    }
  }, [onClickSaveBtn, formDirty]);

  const saveBtn = (
    <Button
      label="Save"
      theme="fillBcg"
      onClick={() => {
        setFormDirty(true);
        setOnClickSaveBtn(true);
      }}
      key={"saveBtn"}
    />
  );

  const canselBtn = (
    <Button
      label="Cansel"
      theme="withBorder"
      onClick={canselFunc}
      key={"canselBtn"}
    />
  );

  return (
    <Form name={name} buttonBlock={[saveBtn, canselBtn]} className="taskForm">
      <ValidationWrap
        required
        maxlength={50}
        setIsValid={(v) => {
          setIsValidName(v);
        }}
        generalDirty={formDirty}
      >
        <Input
          label={"Name"}
          value={taskItem.name}
          setValue={(v: string) => {
            setTaskItem({ ...taskItem, name: v });
          }}
        />
      </ValidationWrap>
      <ValidationWrap
        generalDirty={formDirty}
        required
        setIsValid={(v) => {
          setIsValidDescription(v);
        }}
      >
        <Input
          type="textarea"
          label={"Description"}
          value={taskItem.description}
          setValue={(v: string) => {
            setTaskItem({ ...taskItem, description: v });
          }}
        />
      </ValidationWrap>
      <fieldset className="taskForm__tagsFieldset">
        <legend className="taskForm__tagsLegend">
          Tags
          <Button
            theme="roundWithPlus"
            onClick={() => {
              setTaskItem({
                ...taskItem,
                tags: [...taskItem.tags, ""],
              });
            }}
          >
            Добавить новый тег
          </Button>
        </legend>
        <ul className="taskForm__tagsList">
          {taskItem.tags.map((tag, index) => {
            return (
              <li key={index} className="taskForm__tagsItem">
                <ValidationWrap
                  generalDirty={formDirty}
                  required
                  maxlength={50}
                  setIsValid={(v) => {
                    setIsValidTags([
                      ...isValidTags.slice(0, index),
                      v,
                      ...isValidTags.slice(index + 1),
                    ]);
                  }}
                >
                  <Input
                    value={tag}
                    label={"Tag№" + (index + 1)}
                    setValue={(v) => {
                      setTaskItem({
                        ...taskItem,
                        tags: [
                          ...taskItem.tags.slice(0, index),
                          v,
                          ...taskItem.tags.slice(index + 1),
                        ],
                      });
                    }}
                  />
                </ValidationWrap>
                <Button
                  className="taskForm__delBtnTag"
                  title="Удалить тег"
                  onClick={() => {
                    setTaskItem({
                      ...taskItem,
                      tags: [
                        ...taskItem.tags.slice(0, index),
                        ...taskItem.tags.slice(index + 1),
                      ],
                    });
                    setIsValidTags([
                      ...isValidTags.slice(0, index),
                      ...isValidTags.slice(index + 1),
                    ]);
                  }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.88438 4.65937L9.35001 1.19374C9.59376 0.949994 9.59376 0.553119 9.35001 0.309369C9.10626 0.0656189 8.70938 0.0656189 8.46563 0.309369L5.00001 3.77499L1.53438 0.309369C1.29063 0.0656189 0.893756 0.0656189 0.650006 0.309369C0.406256 0.553119 0.406256 0.949994 0.650006 1.19374L4.11563 4.65937L0.653131 8.12187C0.409381 8.36562 0.409381 8.76249 0.653131 9.00624C0.775006 9.12812 0.934381 9.19062 1.09376 9.19062C1.25313 9.19062 1.41251 9.12812 1.53438 9.00624L5.00001 5.54062L8.46563 9.00624C8.58751 9.12812 8.74688 9.19062 8.90626 9.19062C9.06563 9.19062 9.22501 9.12812 9.34688 9.00624C9.59063 8.76249 9.59063 8.36562 9.34688 8.12187L5.88438 4.65937Z"
                      fill="currentColor"
                    />
                  </svg>
                </Button>
              </li>
            );
          })}
        </ul>
      </fieldset>
    </Form>
  );
};
