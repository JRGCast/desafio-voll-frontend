import { Box, Button, Paper, TextField } from "@material-ui/core";
import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import socketClient from 'socket.io-client';
import './Chatting.css';
// const SERVER = process.env.REACT_APP_CONNECTION_PORT;
// const localUrl = `http://localhost:${SERVER}`;
const EXTERNAL_SERVER = process.env.REACT_APP_BACK_URL;
let socket;


const Chatting = () => {
  const [socketConnected, setSocketConnected] = useState(false);
  const [allMessages, setAllMessages] = useState([]);
  const [allConnected, setAllConnected] = useState([]);
  const [uname, setUname] = useState('');
  const dateTimeRef = useRef(null);
  const { username } = useParams();

  useEffect(() => {
    socket = socketClient(EXTERNAL_SERVER);
    setSocketConnected(true);
  }, []);

  useEffect(() => {
    if (socketConnected) {
      socket.on('connection', () => {
        socket.emit('setName', username);
        socket.emit('getAllMessages');
        socket.emit('getAllConnected');
      });
      socket.on('setName', (pongname) => setUname(pongname));
      socket.on('getAllMessages', (allMessages) => setAllMessages(allMessages));
      socket.on('getAllConnected', (allConnected) => {
        setAllConnected(allConnected);
        console.log(allConnected);
      });
    }
  }, [socketConnected, username]);

  const theConnected = useCallback(() => {
    if (allConnected.length > 0) {
      return allConnected.map(({ givenName }, index) => <li key={ index }>{ givenName }</li>);
    }
  }, [allConnected]);

  useEffect(() => {
    if (socketConnected) {
      socket.on('confirmInsert', (data) => console.log(data));
      socket.on('chatMessage', (message) => console.log(message));
      socket.on('disconnect', (allConnected) => {
        setAllConnected(allConnected);
        theConnected();
        console.log(socket.id, 'disconnected');
      });
    }
  }, [socketConnected, theConnected]);

  useEffect(() => {
    if (socketConnected) {
      socket.on('chatMessage', (message) => {
        const msgBox = document.getElementById('msg-box');
        const newMsg = document.createElement('li');
        const fullMessage = message;
        newMsg.appendChild(document.createTextNode(fullMessage));
        msgBox.appendChild(newMsg);
      });
    }
  }, [socketConnected]);


  useEffect(() => {
    const secondsTimer = setInterval(() => {
      if (dateTimeRef.current) {
        const date = new Date().toLocaleString('pt-br', { dateStyle: 'short' });
        const time = new Date().toLocaleString('pt-br', { timeStyle: 'medium' });
        dateTimeRef.current.innerText = `${date} - ${time}`;
      }
    }, 1000);
    return () => clearInterval(secondsTimer);
  }, []);

  const generateLi = () => {
    const msgInput = document.getElementById('msg-input');
    const msgBox = document.getElementById('msg-box');
    const newMsg = document.createElement('li');
    const fullMessage = `${uname} (${dateTimeRef.current.innerText}) disse: ${msgInput.value}`;
    newMsg.appendChild(document.createTextNode(fullMessage));
    msgBox.appendChild(newMsg);
    msgInput.value = '';
    msgInput.scrollIntoView();
    socket.emit('newMessage', fullMessage);
  };

  const inputKeyPress = (e) => {
    if (e.key === 'Enter') generateLi();
  };

  const dbMessages = () => {
    if (allMessages.length > 0) {
      return allMessages.map(({ message }, index) => <li key={ index }>{ message }</li>);
    }
  };

  const titleStyle = !uname ?
    { background: 'grey', textAlign: 'center', margin: '0 auto', color: 'whitesmoke' } :
    { background: 'green', textAlign: 'center', margin: '0 auto', color: 'whitesmoke' };

  return (
    <section>
      <p ref={ dateTimeRef }></p>
      <Box>
        <Paper variant='outlined'>
          <h2 className='connected-title'
            style={ titleStyle }
          >{ !uname ? 'Aguardando conexão com o servidor...'
            : `Conectado como ${uname}` }</h2>
          <ul ref={ useRef() }>Pessoas Conectadas: { theConnected() }</ul>
          <Paper
            id='msg-box'
            className='message-box'
            elevation={ 3 }
          >{ dbMessages() }</Paper>
        </Paper>
      </Box>
      <TextField
        id='msg-input'
        style={ { margin: '0.5em auto' } }
        onKeyPress={ (e) => inputKeyPress(e) }
        placeholder='Digite sua mensagem'
        fullWidth>
      </TextField>
      <Button variant='contained'
        onClick={ generateLi }>ENVIAR</Button>
      <Button onClick={ () => socket.emit('resetDB') }>RESET DB</Button>
      <button type='button' onClick={ () => console.log(allConnected) }>Messages Console</button>
    </section>);
};

export default Chatting;