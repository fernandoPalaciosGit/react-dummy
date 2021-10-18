import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";
import "../../styles/style_modal.css";

const ModalReference = () => {
  const modalRef = useRef(null);
  const hasInitializeRendered = modalRef.current;

  if (!hasInitializeRendered) {
    modalRef.current = document.createElement("div");
  }

  return modalRef.current;
};
let modal = null;

const Modal = (props) => {
  const modalRoot = modal || document.getElementById("modal");
  const modalRef = ModalReference();
  const fragment = props.children;
  const modalPortal = createPortal(fragment, modalRef);

  useEffect(() => {
    modalRoot.appendChild(modalRef);
    return () => modalRoot.removeChild(modalRef);
  }, []);

  return modalPortal;
};

export default Modal;
