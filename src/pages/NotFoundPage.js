import { NavLink } from "react-router-dom";
import { loginPageUrl } from "../utils/internalUrls";

const NotFoundPage = () => {
  return (
    <section style={ { textAlign: 'center' } }>
      <h1>Página não encontrada</h1>
      <NavLink to={ loginPageUrl } style={ { fontSize: 'larger', fontWeight: '900' } }>Ir para o chat</NavLink>
      <br />
      <img src='https://http.cat/404' alt='not found funny cat' />

    </section>);
};

export default NotFoundPage;