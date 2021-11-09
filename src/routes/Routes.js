import { Redirect, Route, Switch } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import { landingPageUrl, loginPageUrl, registerPageUrl } from '../utils/internalUrls';
const Routes = () => {
  return (
    <Switch>
      <Route path={ loginPageUrl } component={ LoginPage }></Route>
      <Route path={ registerPageUrl } component={ RegisterPage }></Route>
      <Route path={ landingPageUrl } component={ LandingPage }></Route>
      <Route exact path='/'>{ <Redirect to={ landingPageUrl } /> }</Route>
    </Switch>
  );
};

export default Routes;