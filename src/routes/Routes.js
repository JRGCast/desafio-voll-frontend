import { Navigate } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import { landingPageUrl, loginPageUrl, registerPageUrl } from '../utils/internalUrls';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ landingPageUrl } element={ <LandingPage /> }></Route>
      <Route exact path='/' element={ <Navigate to={ landingPageUrl } /> }></Route>
    </Routes>
  );
};

export default AppRoutes;