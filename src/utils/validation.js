export const validateData = (email, password) => {
  const isEmailVailid = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(
    email
  );
  const isPasswordValid = /^(?=.*\d)(.{4,})$/.test(password);
  if (!isEmailVailid) return "Enter a valid email.";
  if (!isPasswordValid) return "Password is too weak.";
  return null;
};
