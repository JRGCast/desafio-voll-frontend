import socketClient from 'socket.io-client';
const SERVER = process.env.REACT_APP_CONNECTION_PORT;



const Chatting = () => {
  const socket = socketClient(`http://localhost:${SERVER}`);

  socket.on('connection', () => {
    console.log(`I'm connected with the back-end`);
});

  return (
    <section>
      <button onClick={ () => console.log(socket) }>Console</button>
    </section>);
};

export default Chatting;