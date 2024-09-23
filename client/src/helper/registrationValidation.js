import toast from "react-hot-toast";

export async function registrationValidation(values) {
  const errors = {};
  nameVerify(errors, values);
  emailVerify(errors, values);
  passwordVerify(errors, values);
  confirmPasswordVerify(errors, values);
  return errors;
}

// Name validation
function nameVerify(errors, values) {
  if (!values.name) {
    errors.name = "Name Required";
    toast.error("Name Required");
  }
}

// Email validation
function emailVerify(errors, values) {
  // Check if the email field is empty
  if (!values.email) {
    errors.email = "Email Required";
    toast.error("Email Required");
  }
  // Check if the email starts with '@'
  else if (values.email.startsWith("@")) {
    errors.email = "Invalid Email";
    toast.error("Invalid Email");
  }
  // Check if the email does not end with '@wharton.com'
  else if (!values.email.endsWith("@wharton.com")) {
    errors.email = "Invalid Email: Must end with @wharton.com";
    toast.error("Invalid Email: Must end with @wharton.com");
  }
  // Check if there are spaces in the email
  else if (/\s/.test(values.email)) {
    errors.email = "Invalid Email: No spaces allowed";
    toast.error("Invalid Email: No spaces allowed");
  }
}

// Password validation
function passwordVerify(errors, values) {
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

// Confirm Password validation
function confirmPasswordVerify(errors, values) {
  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm Password Required";
    toast.error("Confirm Password Required");
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords must match";
    toast.error("Passwords must match");
  }
}
