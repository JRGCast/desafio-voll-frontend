import { Link } from "@material-ui/core";
import { loginPageUrl } from "../utils/internalUrls";

const NotFoundPage = () => {
  return (
    <section>
      <h1>Página não encontrada</h1>
      <img src='https://http.cat/404' alt='not found funny cat' />
      <Link to={ loginPageUrl }>Ir para o chat</Link>
    </section>);
};

export default NotFoundPage;