import React from "react";
import "./style.scss";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
  name: string;
  buttonBlock?: React.ReactNode | React.ReactNode[];
}

export const Form = ({
  children,
  name,
  className,
  buttonBlock,
  ...props
}: FormProps) => {
  return (
    <form {...props} className={"form" + (className ? " " + className : "")}>
      <header className="form__headerBlock">
        <h4 className="form__name">{name}</h4>
      </header>
      <div className="form__fieldsList">{children}</div>

      <footer className="form__btnsBlock">{buttonBlock}</footer>
    </form>
  );
};
