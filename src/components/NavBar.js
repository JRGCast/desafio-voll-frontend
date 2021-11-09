import { AppBar, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import useStyles from "../styles/NavBarStyles";
import { landingPageUrl, loginPageUrl, registerPageUrl } from "../utils/internalUrls";

const NavBar = () => {
  const classes = useStyles();
  const navLinks = [landingPageUrl, loginPageUrl, registerPageUrl];
  const navLinksGen = navLinks.map((link) => {
    const linkText = link.split('/')[1].toUpperCase();
    return (
      <NavLink
        key={ link }
        to={ link }
        style={ { color: 'white', textDecoration: 'none', } }
      >{ linkText }</NavLink>
    );
  });
  return (
    <AppBar >
    {console.log(classes)}
      <Toolbar style={ { display: 'flex', justifyContent: 'space-between', margin: '0 auto', width: '50%' } }>
        { navLinksGen }
      </Toolbar>
    </AppBar >);
};

export default NavBar;