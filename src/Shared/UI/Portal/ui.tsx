import ReactDOM from "react-dom";
import { PortalProps } from "./model";

export const Portal = ({ idPortal, children }: PortalProps) => {
  function createWrapperAndAppendToBodyFunc(idPortal: string) {
    if (document.getElementById(idPortal))
      return document.getElementById(idPortal) as HTMLDivElement;
    else {
      const el = document.createElement("div");
      el.setAttribute("id", idPortal);
      document.body.appendChild(el);
      return el;
    }
  }
  const portalElement = createWrapperAndAppendToBodyFunc(idPortal);

  return ReactDOM.createPortal(children, portalElement);
};
