import { useState, useEffect } from "react";
import { useAppStore } from "../../store/useAppStore";
import styles from "../../shared/Modal/Modal.module.css";

const steps = [
  {
    key: "personal",
    title: "Información personal",
    fields: [
      { key: "firstName", label: "Nombre" },
      { key: "lastName", label: "Apellido" },
      { key: "githubLink", label: "Link de GitHub" },
      { key: "linkedinLink", label: "Link de LinkedIn" },
      { key: "role", label: "Rol" },
      { key: "roleDescription", label: "Descripción del rol" },
    ],
  },
  {
    key: "photo",
    title: "Foto de perfil",
    fields: [
      { key: "photo", label: "Foto para el banner" },
    ],
  },
  {
    key: "cards",
    title: "Cards principales",
    fields: [
      { key: "favouritePosition", label: "Favourite Position" },
      { key: "currentCompany", label: "Current Company" },
      { key: "sideProject", label: "Side Project" },
      { key: "experience", label: "Experience" },
    ],
  },
  {
    key: "console",
    title: "Console Data",
    fields: [
      { key: "aboutMe", label: "About Me" },
      { key: "techStack", label: "Tech Stack" },
      { key: "hobbies", label: "Hobbies" },
      { key: "softSkills", label: "Soft Skills" },
    ],
  },
];

interface ProfileStepperModalProps {
  setStep?: (step: number) => void;
}

const ProfileStepperModal = ({ setStep }: ProfileStepperModalProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const { isOpen, closeModal } = useAppStore();
  const step = steps[currentStep];

  useEffect(() => {
    if (setStep) setStep(currentStep);
  }, [currentStep, setStep]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Modal fijo arriba, centrado horizontalmente, sin fondo oscuro
  return (
    <div style={{ position: 'fixed', top: '110px', left: 0, width: '100vw', display: 'flex', justifyContent: 'center', zIndex: 9999 }}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={closeModal}>
          ×
        </button>
        <h2 style={{ marginBottom: 16 }}>{step.title}</h2>
        <form>
          {step.fields.map(field => (
            <div key={field.key} style={{ marginBottom: 12 }}>
              <label className={styles.label}>{field.label}</label>
              <input className={styles.input} placeholder={field.label} />
            </div>
          ))}
        </form>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
          {currentStep > 0 && (
            <button className={styles.button} onClick={() => setCurrentStep(currentStep - 1)}>
              Atrás
            </button>
          )}
          {currentStep < steps.length - 1 ? (
            <button className={styles.button} onClick={() => setCurrentStep(currentStep + 1)}>
              Continuar
            </button>
          ) : (
            <button className={styles.button} onClick={closeModal}>
              Finalizar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileStepperModal;
