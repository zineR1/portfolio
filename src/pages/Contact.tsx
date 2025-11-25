import styles from "./Contact.module.css";
import emailjs from "emailjs-com";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContactFieldName } from "../types";
import { validateContactField } from "../utils";
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
        "service_hgakl58",
        "template_yzjmr1t",
        e.target as HTMLFormElement,
        "mu4wBWTcndO5oniOq"
      );
      alert("Message sent successfully!");
      setInput({ ...initialInputValues });
      navigate("/");
    }
  };

  return (
    <div className={styles.container}>
      <h1 id="contact-title" className={styles.title}>
        Contact Me
      </h1>

      <form onSubmit={handleSubmit} aria-labelledby="contact-title">
        {fields.map((field) => {
          const errorId = `${field.name}-error`;
          const inputId = `${field.name}-input`;

          return (
            <div className={styles.inputs} key={field.name}>
              <label htmlFor={inputId} className={styles.label}>
                {field.placeholder}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  id={inputId}
                  value={input[field.name]}
                  name={field.name}
                  placeholder={field.placeholder}
                  className={styles.textarea}
                  onChange={handleChange}
                  aria-invalid={!!errors[field.name]}
                  aria-describedby={errors[field.name] ? errorId : undefined}
                />
              ) : (
                <input
                  id={inputId}
                  type={field.type}
                  value={input[field.name]}
                  name={field.name}
                  placeholder={field.placeholder}
                  className={styles.input}
                  onChange={handleChange}
                  aria-invalid={!!errors[field.name]}
                  aria-describedby={errors[field.name] ? errorId : undefined}
                />
              )}

              <div id={errorId} className={styles.errors}>
                {errors[field.name] && <span>{errors[field.name]}</span>}
              </div>
            </div>
          );
        })}

        <div>
          <button
            type="submit"
            className={styles.button}
            aria-label="Send contact message"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
