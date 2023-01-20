import { useNavigate } from "@remix-run/react";

function Modal({ children, onClose }: any) {
  const navigate = useNavigate();

  const closeHandler = () => {
    onClose && onClose();
    navigate("..");
  }

  return (
    <div className="modal-backdrop" onClick={closeHandler}>
      <dialog
        className="modal"
        open
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </dialog>
    </div>
  );
}

export default Modal;
