export const validateData = (email, password) => {
  const isEmailVailid = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(
    email
  );
  const isPasswordValid = /^(?=.*\d)(.{4,})$/.test(password);
  if (!isEmailVailid) return "Email is invalid.";
  if (!isPasswordValid) return "Password is invalid";
  return null;
};
