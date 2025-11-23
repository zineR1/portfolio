import { validEmail } from "../constants";

export const validateContactField = (name: string, value: string) => {
  switch (name) {
    case "name":
      if (!value) return "Name is required";
      break;
    case "email":
      if (!value) return "Email is required";
      if (value.length > 0 && !validEmail.test(value))
        return "Please enter a valid email";
      break;
    case "subject":
      if (!value) return "Subject is required";
      break;
    case "company":
      if (!value) return "Company is required";
      break;
    case "text":
      if (!value) return "Message is required";
      break;
    default:
      return undefined;
  }
  return undefined;
};
