import { useAppStore } from "../../store";
import styles from "./Modal.module.css";
import success from "../../assets/success.webp";
import error from "../../assets/error.webp";

const Modal = () => {
  const { isOpen, modalType, closeModal, setRunTour } = useAppStore();

  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  if (!isOpen) return null;

  let content = null;
  switch (modalType) {
    case "success":
      content = (
        <div className={styles.content}>
          <h2>Profile created successfully!</h2>
          <img src={success} alt="Success" loading="lazy" />
          <p>Your profile has been saved.</p>
          <button onClick={() => closeModal()}>Go to profile</button>
        </div>
      );
      break;
    case "error":
      content = (
        <div className={styles.content}>
          <h2>Error creating profile</h2>
          <img src={error} alt="Error" loading="lazy" />
          <p>
            No changes detected or required fields are missing. Please try
            again.
          </p>
          <button
            onClick={() => {
              closeModal();
              setRunTour(true);
            }}
          >
            Back to edit
          </button>
        </div>
      );
      break;
    default:
      content = null;
  }

  return (
    <div className={styles.background} onClick={closeModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeButton}
          onClick={closeModal}
          aria-label="Close modal"
        >
          ×
        </button>
        <div className={styles.content}>{content}</div>
      </div>
    </div>
  );
};

export default Modal;
