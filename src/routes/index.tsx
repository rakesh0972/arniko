import {Routes, Route} from 'react-router-dom';
import {LoginScreen} from "../pages/auth/Login.screen";
import { SignupScreen } from '../pages/auth/Signup.screen';
import {LandingPage} from '../pages/auth/Landing.page';

const MainRoute = () => {
    return (
        <Routes>
            <Route path={''} element={<LandingPage/>} />
        </Routes>
    );
};

export default MainRoute;
