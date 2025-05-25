# LOOP

A modern movie information platform that provides detailed insights into the latest releases, trending titles, and upcoming films. LOOP is designed with a clean, responsive UI offering a seamless movie discovery experience.

## Live Demo

🔗 [loop-movies](https://loop-movies.onrender.com/)


## Features

- **Latest & Trending:** Browse new and trending movies, with up-to-date listings from TMDB.
- **Detailed Movie Pages:** View movie details, trailers, genres, similar movies, and top cast members.
- **User Authentication:** Secure sign-up and login with Firebase Authentication.
- **State Management:** Powered by Redux Toolkit for efficient state handling.
- **Responsive Design:** Built with ReactJS and styled with TailwindCSS for a responsive UI.

## Tech Stack

- **Frontend:** ReactJS, Redux Toolkit, React Router, TailwindCSS
- **Authentication/Hosting:** Firebase
- **API:** TMDB (The Movie Database)
- **Build Tool:** Vite
- **Other:** Axios, ESLint, Prettier, Lucide-React

## Folder Structure
```
src/
  components/         # UI and common components (Header, ProtectedRoute, Cards, etc.)
  pages/              # Page-level components (Browse, MovieDetails, Login)
  redux/              # Redux store setup and slices (userSlice, movieSlice, etc.)
  services/           # Firebase authentication services
  utils/              # Constants, Firebase config
  assets/             # Static assets (images, icons, etc.)
  index.jsx           # App entry point
  App.jsx             # Main App with Redux Provider
```

## Getting Started

### Prerequisites

- **Node.js** v18 or higher
- A **TMDB API Key** (sign up for free at [TMDB](https://www.themoviedb.org/documentation/api))
- A **Firebase project** for Authentication & Hosting (Create one at [firebase console](https://console.firebase.google.com/))

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shyam-vishwakarma/Loop.git
   cd Loop
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the project root with the following content, replacing values with your own:

   ```
   VITE_FIREBASE_API_KEY=your-firebase-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   VITE_FIREBASE_MEASUREMENT_ID=your-measurement-id
   VITE_IMG_URL=https://image.tmdb.org/t/p/w500
   VITE_BACKDROP_URL=https://image.tmdb.org/t/p/original
   VITE_TMDB_API_KEY=your-tmdb-api-key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

### Firebase Hosting (optional)

1. **Build the app:**
   ```bash
   npm run build
   ```

2. **Deploy to Firebase:**
   ```bash
   firebase deploy
   ```

## Key Code Highlights

- **Authentication:**  
  Handled in [`src/services/authService.js`](src/services/authService.js) using Firebase Authentication for sign up, sign in, sign out, and observing user state changes.

- **Protected Routing:**  
  [`src/components/common/ProtectedRoute.jsx`](src/components/common/ProtectedRoute.jsx) ensures that only authenticated users can access protected routes within the app.

- **Redux Store:**  
  [`src/redux/store.js`](src/redux/store.js) combines user, movies, and movie details reducers to maintain a centralized application state with Redux Toolkit.

- **API Integration:**  
  TMDB API is used across Redux slices and services to fetch movie data, images, and details dynamically.

- **UI Components:**  
  Built with functional React components and styled using TailwindCSS for a modern, responsive user interface.

- **Routing:**  
  The app uses React Router for navigation and route protection, as seen in [`src/components/Body.jsx`](src/components/Body.jsx).

- **Environment Variables:**  
  Sensitive configuration (API keys, endpoints) are managed via environment variables set in a `.env` file.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
  
