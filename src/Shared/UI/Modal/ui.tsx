import React, { useEffect } from "react";
import "./style.scss";
import { Portal } from "../Portal/ui";
import { ModalProps } from "./modal";

export const Modal = ({
  children,
  setIsShow,
  isShow,
  colorCloseBtn = "primary",
}: ModalProps) => {
  useEffect(() => {
    if (isShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isShow]);
  useEffect(() => {
    () => {
      return () => {
        document.body.style.overflow = "auto";
      };
    };
  });

  const onClickInModel = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      setIsShow(false);
    }
  };

  return (
    <Portal idPortal="modal">
      <div
        className={"modal" + (!isShow ? " modal_hidden" : "")}
        onClick={onClickInModel}
      >
        <div className="modal__window">
          {children}
          <button
            className={"modal__closeBtn modal__closeBtn_color_" + colorCloseBtn}
            onClick={() => {
              setIsShow(false);
            }}
          >
            Open/close modal
          </button>
        </div>
      </div>
    </Portal>
  );
};
