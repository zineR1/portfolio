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
      const resp = emailjs.sendForm(
        "service_hgakl58",
        "template_yzjmr1t",
        e.target as HTMLFormElement,
        "mu4wBWTcndO5oniOq"
      );
      console.log(resp,"RESP")
      alert("Message sent successfully!!");
      setInput({
        ...initialInputValues,
      });
      navigate("/");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>Contact Me</div>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div className={styles.inputs} key={field.name}>
            {field.type === "textarea" ? (
              <textarea
                value={input[field.name]}
                name={field.name}
                placeholder={field.placeholder}
                className={styles.textarea}
                onChange={handleChange}
              />
            ) : (
              <input
                type={field.type}
                value={input[field.name]}
                name={field.name}
                placeholder={field.placeholder}
                className={styles.input}
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
  );
};

export default Contact;
