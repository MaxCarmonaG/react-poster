import { FC, PropsWithChildren } from "react";
import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

const Modal: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  
  return (
    <>
      <div className={classes.backdrop} onClick={() => navigate('..')} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
