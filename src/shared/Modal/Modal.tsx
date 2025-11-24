import { useAppStore } from "../../store/useAppStore";
import CreateProfileForm from "../../components/CreateProfile/CreateProfileForm";
import styles from "./Modal.module.css";

const Modal = () => {
  const { isOpen, modalType, closeModal } = useAppStore();

  if (!isOpen) return null;

  let content = null;
  switch (modalType) {
    case "createProfile":
      content = <CreateProfileForm />;
      break;
    default:
      content = null;
  }

  return (
    <div className={styles.background} onClick={closeModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={closeModal}>
          ×
        </button>
        {content}
      </div>
    </div>
  );
};

export default Modal;
