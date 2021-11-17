import { useParams } from "react-router";
import Chatting from "../components/Chatting";


const ChatPage = () => {
  const { username } = useParams();
  return (
    <main>
      <h1>Bem-vindo ao Chat { username }</h1>
      <Chatting />
    </main>);
};

export default ChatPage;