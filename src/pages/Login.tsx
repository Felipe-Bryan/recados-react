import { Button, Checkbox, FormControlLabel, Grid, TextField, Typography, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertDialogSlide from '../components/AlertDialogSlide';
import PasswordField from '../components/PasswordField';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import UserType from '../types/UserType';
import 'animate.css';
import { setLoggedUserIndex } from '../store/modules/usersSlice';

const Login: React.FC = () => {
  const usersRedux = useAppSelector(state => state.users);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [pageFade, setPageFade] = useState<string>('animate__animated animate__fadeIn');

  const handleChangePage = () => {
    setPageFade('animate__animated animate__fadeOut');
    setTimeout(() => navigate('/register'), 900);
  };

  const [userEmail, setUserEmail] = useState<string>('');
  const handleUserEmail = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setUserEmail(e.target.value);
  };

  const [userPassword, setUserPassword] = useState<string>('');
  const handleUserPassword = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setUserPassword(e.target.value);
  };

  const [validUser, setValidUser] = useState<boolean>(false);
  const [userToLogin, setUserToLogin] = useState<UserType>();

  useEffect(() => {
    const userFound = usersRedux.users.find(user => user.email === userEmail);
    if (!userFound) {
      setValidUser(false);
    } else if (userFound.password !== userPassword) {
      setValidUser(false);
    } else {
      setValidUser(true);
      setUserToLogin(userFound);
    }
  }, [userEmail, userPassword]);

  const [stayLogged, setStayLogged] = useState<boolean>(true);
  const handleStayLogged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStayLogged(e.target.checked);
  };

  const [userEmailError, setUserEmailError] = useState<boolean>(false);
  useEffect(() => {
    if (userEmail.length) {
      if (userEmail.length < 3) {
        setUserEmailError(true);
      } else {
        setUserEmailError(false);
      }
    } else {
      setUserEmailError(false);
    }
  }, [userEmail]);

  const [userPasswordError, setUserPasswordError] = useState<boolean>(false);
  useEffect(() => {
    if (userPassword.length) {
      if (userPassword.length < 5) {
        setUserPasswordError(true);
      } else {
        setUserPasswordError(false);
      }
    } else {
      setUserPasswordError(false);
    }
  }, [userPassword]);

  const [valid, setValid] = useState<boolean>(false);
  useEffect(() => {
    if (userEmail.length >= 5 && userPassword.length >= 5) {
      setValid(true);
    } else {
      setValid(false);
    }
  });

  const loggedUser = JSON.parse(localStorage.getItem('loggedUser') || '0');
  useEffect(() => {
    if (loggedUser !== 0) {
      const index = usersRedux.users.findIndex(user => user.id === loggedUser);
      dispatch(setLoggedUserIndex(index));
      setTimeout(() => navigate('/home'), 200);
    }
  });

  const handleLogin = () => {
    if (!validUser) {
      alert('Usuário ou senha incorretos!');
    } else if (stayLogged && userToLogin) {
      const index = usersRedux.users.findIndex(user => user.id === userToLogin.id);
      dispatch(setLoggedUserIndex(index));
      localStorage.setItem('loggedUser', JSON.stringify(userToLogin.id));
      setOpenAlert(true);
    } else if (!stayLogged && userToLogin) {
      const index = usersRedux.users.findIndex(user => user.id === userToLogin.id);
      dispatch(setLoggedUserIndex(index));
      setOpenAlert(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <>
      <Paper elevation={3} style={{ padding: '5px', maxWidth: '500px' }} className={pageFade}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography align="center" variant="h4">
              <img style={{ height: '40px' }} src="./assets/images/taskVault-logo.png" alt="logo" />
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography align="center" variant="h4">
              Fazer Login
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              error={userEmailError}
              helperText={userEmailError ? 'Digite um e-mail válido, no mínimo 5 caracteres' : ''}
              onChange={e => handleUserEmail(e)}
              fullWidth
              label="Email"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <PasswordField
              onKeyDown={handleKeyDown}
              error={userPasswordError}
              helperText={userPasswordError ? 'Digite uma senha válida, no mínimo 5 caracteres' : ''}
              onChange={e => handleUserPassword(e)}
              label="Senha"
            ></PasswordField>
          </Grid>

          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              disabled={!valid}
              onClick={handleLogin}
              className={valid ? 'animate__animated animate__pulse animate__infinite infinite' : ''}
            >
              Entrar
            </Button>
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox onChange={handleStayLogged} defaultChecked />}
              label="Permanecer conectado"
            />
          </Grid>

          <Grid item xs={12}>
            <Typography>Ainda não possui uma conta?</Typography>
            <Button onClick={handleChangePage} variant="text">
              Faça seu cadastro.
            </Button>
          </Grid>
        </Grid>
        <AlertDialogSlide
          description="Você será redirecionado(a) para a página de recados."
          actionConfirm={() => navigate('/home')}
          actionCancel={() => navigate('/home')}
          openDialog={openAlert}
          title="Usuário logado com sucesso!"
          confirmButtonTitle="OK"
        />
      </Paper>
    </>
  );
};

export default Login;
