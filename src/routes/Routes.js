import { Navigate } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import ChatPage from '../pages/ChatPage';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import { chatPageUrl, landingPageUrl, loginPageUrl } from '../utils/internalUrls';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ loginPageUrl } element={ <LoginPage /> }></Route>
      <Route path={ landingPageUrl } element={ <LandingPage /> }></Route>
      <Route path={ chatPageUrl } element={ <ChatPage /> }></Route>
      <Route exact path='/' element={ <Navigate to={ landingPageUrl } /> }></Route>
    </Routes>
  );
};

export default AppRoutes;