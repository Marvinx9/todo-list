import { useEffect, useRef } from "react";
import "./dialog.style.css";

export function Dialog({ isOpen, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    isOpen ? openDialog() : closeDialog();
  }, [isOpen]);

  const openDialog = () => {
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <>
      <dialog ref={dialogRef}>
        <input type="text" placeholder="Digite o item que deseja adicionar" />
        <button onClick={onClose}>Salvar item</button>
      </dialog>
    </>
  );
}
