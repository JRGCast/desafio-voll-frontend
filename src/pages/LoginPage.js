import { Avatar, Button, Grid, Paper, TextField } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  const submitNickName = () => {
    navigate('/')
  };
  const handleInputChange = ({ target: { value } }) => {
    setNickname(value);
  };
  return (
    <main>
      <Grid>
        <Paper elevation={ 10 }
          style={ { alignItems: 'center', display: 'flex', flexFlow: 'column wrap', padding: 20, width: 280, margin: '1em auto' } }
        >
          <Grid align='center'>
            <Avatar src='https://empregarja.com/img/loginlogo.png' alt='login-avatar' />
            <h2>Login</h2>
            <TextField
              id='nickname-input'
              label='Apelido'
              placeholder='Insira seu apelido'
              style={ { margin: '1em auto' } }
              onChange={ handleInputChange }
            >
            </TextField>
            <Button
              variant='contained'
              onClick={ submitNickName }>Entrar
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </main>);
};

export default LoginPage;