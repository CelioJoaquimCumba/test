// vee-validate-extensions.js
import { extend } from "vee-validate";
import { required, email, min as veeMin } from "vee-validate/dist/rules";

extend("password", {
  validate: (value) =>
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*.])(?=.*[a-z]).{8,}$/.test(value),
  message:
    "The password must have at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long.",
});

extend("alpha_spaces", {
  validate: (value) => /^[A-Za-z\s]+$/.test(value),
  message: "The field may only contain alphabetic characters and spaces.",
});

extend("min", {
  ...veeMin,
  validate(value, { length }) {
    return veeMin.validate(value, { length });
  },
  params: ["length"],
  message: "The field must be at least {length} characters.",
});

extend("required", {
  ...required,
  message: "The field is required.",
});

extend("email", {
  ...email,
  message: "The field must be a valid email address.",
});
