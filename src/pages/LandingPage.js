import { Link } from "react-router-dom";
import { loginPageUrl } from "../utils/internalUrls";


const LandingPage = () => {
  return (
    <main style={ { margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '30%' } }>
      <header >
        <h1>Olá! Bem-vindo/a ao Webchat  # desafio-voll</h1>
        <p>Desenvolver um sistema de CHAT para conversas em grupo utilizando WEBSOCKET.</p>
      </header>
      <section>
        Requisitos
        <ol>
          <li>
            Ao se conectar no app, será necessário informar um nome de usuário que será usado como identificação nas mensagens enviadas;
          </li>
          <li>
            Todos usuários conectados podem enviar e ler mensagens de todas as pessoas conectadas;
          </li>
          <li>
            Ao se conectar, será necessário carregar o histórico das últimas 30 mensagens trocadas através de uma API REST;
          </li>
          <li>
            As mensagens deverão ser armazenadas em um banco de dados da sua escolha;
          </li>
          <li>
            O código deve ser publicado no github;
          </li>
        </ol>
        - Diferenciais
        <ol>
          <li> Desenvolver o front-end em vue.js;</li>
          <li>
            Listar os usuários conectados ao app;
          </li>
          <li>
            Publicar o front-end utilizando netlify;
          </li>
          <li>
            Publicar o back-end utilizando heroku;
          </li>
        </ol>
        - Observações: <br />
        Usar a tecnologia front-end e back-end que preferir. <br />
        Exemplo de funcionamento: https://gfycat.com/webbedmisguidedhind <br />
        Dúvidas: giovanni@vollsolutions.com.br

      </section>
      <div style={ { alignItems: 'center', display: 'flex', justifyContent: 'space-between', margin: '0 auto', width: '50%' } }>
        <Link to={ loginPageUrl }>Ir para o chat</Link>
      </div>
    </main>
  );
};

export default LandingPage;