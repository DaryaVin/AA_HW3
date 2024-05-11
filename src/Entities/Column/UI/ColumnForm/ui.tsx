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
      color: {
        r: 0,
        g: 0,
        b: 0,
      },
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
          options={[
            "RGB(187, 191, 196)",
            "RGB(98, 83, 218)",
            "RGB(108, 191, 239)",
            "RGB(163, 217, 130)",
            "RGB(240, 118, 107)",
            "RGB(122, 122, 246)",
            "RGB(228, 113, 249)",
            "RGB(242, 193, 78)",
            "RGB(84, 191, 20)"
          ]}
          label={"Color"}
          value={`RGB(${columnItem.color.r}, ${columnItem.color.g}, ${columnItem.color.b})`}
          setValue={(v) => {
            if (typeof v === "string") {
              let colorObj;
              // Assuming the string format is "RGB(r, g, b)"
              const matches = v.match(/RGB\((\d+), (\d+), (\d+)\)/);
              if (matches && matches.length === 4) {
                const [, r, g, b] = matches.map(Number);
                colorObj = { r, g, b };
              } else {
                // Handle other cases if needed
                colorObj = { r: 0, g: 0, b: 0 }; // Default to black color
              }
              // Now you have your color object, you can use it as needed
              setColumnItem({ ...columnItem, color: colorObj });
            }
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
