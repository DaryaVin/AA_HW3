import React, { useEffect, useState } from "react";
// import "./style.scss";
import {
  Button,
  ColorSelect,
  Form,
  Input,
  SelectWithFilter,
  ValidationWrap,
} from "../../../../Shared";
import { ColumnItem } from "../../Model/type";

type ColumnFormProps = (
  | {
      initialColumnItem: ColumnItem;
    }
  | {
      initialColumnItem?: ColumnItem;
    }
) & {
  name: string;
  saveFunc: (item: ColumnItem) => void;
  canselFunc: () => void;
  nameColumnsList: string[];
} & React.FormHTMLAttributes<HTMLFormElement>;

export const ColumnForm = ({
  initialColumnItem,
  name,
  saveFunc,
  canselFunc,
  nameColumnsList,
  ...props
}: ColumnFormProps) => {
  const initialValue: ColumnItem =
    initialColumnItem ||
    ({
      id: "",
      name: "",
      color: "white",
      position: "",
    } as ColumnItem);
  const [columnItem, setColumnItem] = useState<ColumnItem>(initialValue);
  const [isValidName, setIsValidName] = useState<boolean>(true);
  const [isValidColor, setIsValidColor] = useState<boolean>(true);
  const [isValidPosition, setIsValidPosition] = useState<boolean>(true);

  const [formDirty, setFormDirty] = useState<boolean>(false);
  const [onClickSaveBtn, setOnClickSaveBtn] = useState<boolean>(false);

  useEffect(() => {
    if (formDirty && onClickSaveBtn) {
      const isValidForm = isValidName && isValidColor && isValidPosition;

      if (isValidForm) {
        saveFunc(columnItem);
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
    <Form
      {...props}
      name={name}
      buttonBlock={[saveBtn, canselBtn]}
      className="columnForm"
    >
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
          value={columnItem.name}
          setValue={(v: string) => {
            setColumnItem({ ...columnItem, name: v });
          }}
        />
      </ValidationWrap>
      <ValidationWrap
        generalDirty={formDirty}
        required
        setIsValid={(v) => {
          setIsValidColor(v);
        }}
      >
        <ColorSelect
          options={["red", "pink", "blue", "green", "white"]}
          label={"Color"}
          value={columnItem.color}
          setValue={(v) => {
            if (!Array.isArray(v)) setColumnItem({ ...columnItem, color: v });
          }}
        />
      </ValidationWrap>
      <ValidationWrap
        generalDirty={formDirty}
        required
        setIsValid={(v) => {
          setIsValidPosition(v);
        }}
      >
        <SelectWithFilter
          label="The column after which is located"
          value={columnItem.position === "" ? "Put first" : columnItem.position}
          setValue={(v) => {
            if (!Array.isArray(v))
              if (v === "Put first") {
                setColumnItem({ ...columnItem, position: "" });
              } else {
                setColumnItem({ ...columnItem, position: v });
              }
          }}
          options={[...nameColumnsList, "Put first"]}
        />
      </ValidationWrap>
    </Form>
  );
};
