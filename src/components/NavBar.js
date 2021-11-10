import { AppBar, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { landingPageUrl, loginPageUrl, registerPageUrl } from "../utils/internalUrls";
import './NavBar.css';

const NavBar = () => {
  const navLinks = [landingPageUrl, loginPageUrl, registerPageUrl];
  const navLinksGen = navLinks.map((link) => {
    const linkText = link.split('/')[1].toUpperCase();
    return (
      <NavLink
        key={ link }
        to={ link }
        className='NavLink'
      >{ linkText }</NavLink>
    );
  });
  return (
    <AppBar className='NavAppBar'>
      <Toolbar className='NavToolBar'>
        { navLinksGen }
      </Toolbar>
    </AppBar >);
};

export default NavBar;