import React from "react";
import successImg from "../../assets/clock1.png";
import errorImg from "../../assets/casa2.png";

interface FeedbackStepContentProps {
  setRun: (run: boolean) => void;
  modalType: "success" | "error" | null;
}

const modalMessages = {
  success: {
    title: "¡Perfil creado con éxito!",
    message: "Tu perfil ha sido guardado correctamente. Puedes editarlo en cualquier momento desde la consola.",
    button: "Ir al perfil"
  },
  error: {
    title: "Error al crear el perfil",
    message: "No se detectaron cambios o faltan datos requeridos. Por favor revisa los campos e intenta nuevamente.",
    button: "Volver a editar"
  }
};

const FeedbackStepContent: React.FC<FeedbackStepContentProps> = ({ setRun, modalType }) => {
  if (!modalType) return null;
  const { title, message, button } = modalMessages[modalType];
  const imgSrc = modalType === "success" ? successImg : errorImg;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-[rgb(173,173,173)] rounded-[16px] shadow-[0_8px_32px_rgba(56,56,56,0.493)] px-8 py-10 flex flex-col items-center w-[350px] max-w-full">
        <img src={imgSrc} alt={modalType} className="w-[80px] h-[80px] mb-4" />
        <h2 className="text-white text-[22px] font-semibold mb-4 text-center">{title}</h2>
        <p className="text-[#181818] text-[15px] mb-6 text-center">{message}</p>
      </div>
    </div>
  );
};

export default FeedbackStepContent;
