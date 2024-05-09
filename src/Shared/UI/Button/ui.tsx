import React from "react";
import "./style.scss";

interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tag?: "button";
}
interface anchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  tag?: "a";
}
interface generalProps {
  label?: React.ReactNode;
  theme?: "withBorder" | "fillBcg" | "roundWithPlus" | "onlyContent";
}
export type ButtonProps = generalProps & (buttonProps | anchorProps);

export const Button = ({
  tag = "button",
  label,
  className,
  children,
  theme = "withBorder",
  type,
  ...props
}: ButtonProps) => {
  const newClassName =
    "button" + (className ? " " + className : "") + " button_theme_" + theme;

  const content = (
    <span className="button__label">
      {label} {children}
    </span>
  );
  return React.createElement(
    tag,
    {
      ...props,
      className: newClassName,
      type: !type && tag === "button" ? "button" : type,
    },
    content
  );
};
