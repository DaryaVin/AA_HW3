import React, { cloneElement, useEffect } from "react";
import "./style.scss";
import { useValidationFieldForm } from "../../Hooks/useValidation";
import { ValidationMessage } from "../ValidationMessage/ui";

type ValidationWrapProps = {
  required?: boolean;
  maxlength?: number;
  minlength?: number;
  noRepeat?: string[];
  pattern?: string;
  generalDirty?: boolean;
  setIsValid?: (val: boolean) => void;
  children: JSX.Element;
  value?: string | boolean | string[] | FileList | null | undefined;
  className?: string;
};

export const ValidationWrap = ({
  required,
  maxlength,
  minlength,
  pattern,
  noRepeat,
  generalDirty,
  setIsValid,
  value,
  children,
  className,
}: ValidationWrapProps) => {
  const validation = useValidationFieldForm({
    value: value || children.props.value,
    options: {
      required,
      maxlength,
      minlength,
      pattern,
      noRepeat,
    },
  });

  useEffect(() => {
    if (setIsValid) {
      setIsValid(validation.isValid);
    }
  }, [validation.isValid, generalDirty]);

  useEffect(() => {
    if (generalDirty) validation.setIsDirty(true);
  }, [generalDirty]);

  return (
    <div className={"validationWrap" + (className ? " " + className : "")}>
      {cloneElement(children, {
        ...children.props,
        isError: (validation.isDirty || generalDirty) && !validation.isValid,
        onDirty: () => {
          validation.setIsDirty(true);
        },
      })}
      <ValidationMessage {...validation} />
    </div>
  );
};
