export interface ModalProps {
  children: React.ReactNode;
  isShow: boolean;
  setIsShow: (val: boolean) => void;
  colorCloseBtn?: "base" | "primary";
}
