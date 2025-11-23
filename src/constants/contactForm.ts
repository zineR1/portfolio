import styles from "../pages/Contact.module.css";
import { ContactField } from "../types";

export const fields: ContactField[] = [
  {
    name: "name",
    type: "text",
    placeholder: "Your name",
    className: styles.input,
  },
  {
    name: "email",
    type: "text",
    placeholder: "Your email",
    className: styles.input,
  },
  {
    name: "company",
    type: "text",
    placeholder: "Company Name",
    className: styles.input,
  },
  {
    name: "subject",
    type: "text",
    placeholder: "Subject",
    className: styles.input,
  },
  {
    name: "text",
    type: "textarea",
    placeholder: "Your message",
    className: styles.textarea,
  },
];

export const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const initialInputValues = {
  name: "",
  email: "",
  subject: "",
  company: "",
  text: "",
};
export const initialErrorsValues = {
  name: undefined,
  email: undefined,
  subject: undefined,
  company: undefined,
  text: undefined,
};
