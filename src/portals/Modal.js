import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";

const getModalReference = () => {
  const modalRef = useRef(null);
  const hasInitializeRendered = modalRef.current;

  if (!hasInitializeRendered) {
    modalRef.current = document.createElement("div");
  }

  return modalRef.current;
};

const Modal = (props) => {
  const modalRoot = document.getElementById("modal");
  const modalRef = getModalReference();
  const fragment = props.children;
  const modalPortal = createPortal(fragment, modalRef);

  useEffect(() => {
    modalRoot.appendChild(modalRef);
    return () => modalRoot.removeChild(modalRef);
  }, []);

  return modalPortal;
};

export default Modal;
