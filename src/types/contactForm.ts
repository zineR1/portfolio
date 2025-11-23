export type ContactFieldName = "name" | "email" | "subject" | "company" | "text";

export interface ContactField {
  name: ContactFieldName;
  type: "text" | "textarea";
  placeholder: string;
  className: string;
}