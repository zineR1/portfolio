import { ContactField } from "../types";

export const fields: ContactField[] = [
  {
    name: "name",
    type: "text",
    placeholder: "Your name",
  },
  {
    name: "email",
    type: "text",
    placeholder: "Your email",
  },
  {
    name: "company",
    type: "text",
    placeholder: "Company Name",
  },
  {
    name: "subject",
    type: "text",
    placeholder: "Subject",
  },
  {
    name: "text",
    type: "textarea",
    placeholder: "Your message",
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
