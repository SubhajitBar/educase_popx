import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import "./App.css";
const LandingPage = lazy(() => import("./components/LandingPage/LandingPage"));
const Signup = lazy(() => import("./components/Signup/Signup"));
const Login = lazy(() => import("./components/Login/Login"));
const Profile = lazy(() => import("./components/Profile/Profile"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
