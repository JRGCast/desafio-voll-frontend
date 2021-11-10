import { Navigate, Router } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import { landingPageUrl, loginPageUrl, registerPageUrl } from '../utils/internalUrls';
const AppRoutes = () => {
  return (
    // <Router>

        <Routes>
          <Route path={ loginPageUrl } element={ <LoginPage/> }></Route>
          <Route path={ registerPageUrl } element={ <RegisterPage/> }></Route>
          <Route path={ landingPageUrl } element={ <LandingPage/> }></Route>
          {/* <Route exact path='/'>{ <Navigate to={ landingPageUrl } /> }</Route> */}
        </Routes>
    // </Router>
  );
};

export default AppRoutes;