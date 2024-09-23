import toast from "react-hot-toast";

export async function onlyEmailValidate(values) {
  const errors = {};
  emailVerify(errors, values);
  return errors;
}

export async function onlyPasswordValidate(values) {
  const errors = {};
  passwordVerify(errors, values);
  return errors;
}

export async function emailValidate(values) {
  const errors = {};
  emailVerify(errors, values);
  passwordVerify(errors, values);
  return errors;
}

// Email validation
function emailVerify(errors, values) {
  // Check if the email field is empty
  if (!values.email) {
    errors.email = "Email Required";
    toast.error("Email Required");
  }
  // Check if email ends with @wharton.com
  else if (!values.email.endsWith("@wharton.com")) {
    errors.email = "Invalid Email: Must end with @wharton.com";
    toast.error("Invalid Email: Must end with @wharton.com");
  }
  // Check for spaces in the email string
  else if (/\s/.test(values.email)) {
    errors.email = "Invalid Email: No spaces allowed";
    toast.error("Invalid Email: No spaces allowed");
  }
}

// Password validation
function passwordVerify(errors, values) {
  // Check if the password is less than 8 characters
  if (!values.password) {
    errors.password = "Password Required";
    toast.error("Password Required");
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
    toast.error("Password must be at least 8 characters long");
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password = "Password must contain at least one uppercase letter";
    toast.error("Password must contain at least one uppercase letter");
  } else if (!/[a-z]/.test(values.password)) {
    errors.password = "Password must contain at least one lowercase letter";
    toast.error("Password must contain at least one lowercase letter");
  } else if (!/[0-9]/.test(values.password)) {
    errors.password = "Password must contain at least one number";
    toast.error("Password must contain at least one number");
  }
}
