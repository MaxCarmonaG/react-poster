import { FC, PropsWithChildren } from "react";
import classes from "./Modal.module.css";

interface ModalProps {
  oncClose: () => void;
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({ children, oncClose }) => {
  return (
    <>
      <div className={classes.backdrop} onClick={oncClose} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
