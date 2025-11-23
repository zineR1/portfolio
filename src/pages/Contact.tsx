import styles from "./Contact.module.css";
import emailjs from "emailjs-com";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateContactField } from "../utils";
import { ContactFieldName } from "../types";
import { initialErrorsValues, initialInputValues, fields } from "../constants";

const Contact = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<
    Record<ContactFieldName, string | undefined>
  >({ ...initialErrorsValues });

  const [input, setInput] = useState<Record<ContactFieldName, string>>({
    ...initialInputValues,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name as ContactFieldName]: value }));
    setErrors((prev) => ({
      ...prev,
      [name as ContactFieldName]: validateContactField(name, value),
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validar todos los campos antes de enviar
    const newErrors: Record<ContactFieldName, string | undefined> = {
      ...initialErrorsValues,
    };
    (Object.entries(input) as [ContactFieldName, string][]).forEach(
      ([name, value]) => {
        const error = validateContactField(name, value);
        if (error) newErrors[name] = error;
      }
    );
    setErrors(newErrors);
    if (Object.values(newErrors).every((err) => !err)) {
      emailjs.sendForm(
        "service_l9nbfqt",
        "template_yzjmr1t",
        e.target as HTMLFormElement,
        "mu4wBWTcndO5oniOq"
      );
      alert("Message sent successfully!!");
      setInput({
        ...initialInputValues,
      });
      navigate("/");
    }
  };

  return (
    <div>
      <div className={styles.main1}>
        <div className={styles.title1}>Contact Me</div>
        <form onSubmit={handleSubmit}>
          {fields.map((field) => (
            <div className={styles.inputs} key={field.name}>
              {field.type === "textarea" ? (
                <textarea
                  value={input[field.name]}
                  name={field.name}
                  placeholder={field.placeholder}
                  className={field.className}
                  onChange={handleChange}
                />
              ) : (
                <input
                  type={field.type}
                  value={input[field.name]}
                  name={field.name}
                  placeholder={field.placeholder}
                  className={field.className}
                  onChange={handleChange}
                />
              )}
              <div className={styles.errors}>
                {errors[field.name] && <span>{errors[field.name]}</span>}
              </div>
            </div>
          ))}
          <div>
            <button type="submit" className={styles.button}>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
