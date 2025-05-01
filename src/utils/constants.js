export const LOGO_URL = import.meta.env.VITE_LOGO_URL;
export const BG_IMG_URL = import.meta.env.VITE_BG_IMG_URL;
export const DefaultUserURL = import.meta.env.VITE_DEFAULT_USER_URL;
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export const TMDB_IMG_URL = import.meta.env.VITE_IMG_URL;
export const TMDB_BACKDROP_URL = import.meta.env.VITE_BACKDROP_URL;

export const errorMessages = {
  "auth/email-already-in-use": "This email is already in use.",
  "auth/invalid-email": "Invalid email address. Please enter a valid email.",
  "auth/operation-not-allowed": "Operation not allowed.",
  "auth/weak-password": "Weak password. Please choose a stronger password.",
  "auth/user-disabled": "This user account has been disabled.",
  "auth/user-not-found": "No user found with this email.",
  "auth/wrong-password": "Incorrect password. Please try again.",
  "auth/invalid-credential": "Invalid credentials. Please try again.",
  "auth/invalid-verification-code": "Invalid verification code.",
  "auth/invalid-verification-id": "Invalid verification ID.",
  "auth/too-many-requests":
    "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.",
  "auth/missing-display-name": "Username is required for sign up.",
};

export const SEARCH_PLACEHOLDER =
  "Search for movies by their original, translated and alternative titles.";
