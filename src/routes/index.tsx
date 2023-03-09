import { Routes, Route } from "react-router-dom";
import { LoginScreen } from "../pages/auth/Login.screen";
import { SignupScreen } from "../pages/auth/Signup.screen";
import { LandingPage } from "../pages/auth/Landing.page";
import { MissionPage } from "../pages/auth/Mission.page";

const MainRoute = () => {
  return (
    <Routes>
      <Route path={""} element={<LandingPage />} />
      {/* <Route path={""} element={<MissionPage />} /> */}
    </Routes>
  );
};

export default MainRoute;
