import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertDialogSlide from '../components/AlertDialogSlide';
import PasswordField from '../components/PasswordField';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addUser } from '../store/modules/usersSlice';
import UserType from '../types/UserType';
import generateID from '../utils/generateID';
import 'animate.css';

const Register: React.FC = () => {
  const usersRedux = useAppSelector(state => state.users);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [pageFade, setPageFade] = useState<string>('animate__animated animate__fadeIn');

  const [userName, setUserName] = useState<string>('');
  const handleUserName = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const [userEmail, setUserEmail] = useState<string>('');
  const handleUserEmail = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setUserEmail(e.target.value);
  };

  const [userPassword, setUserPassword] = useState<string>('');
  const handleUserPassword = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setUserPassword(e.target.value);
  };

  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const handleConfirmPassword = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const [valid, setValid] = useState<boolean>(false);
  useEffect(() => {
    if (userEmail.length >= 5 && userPassword.length >= 5 && confirmPassword === userPassword && userName.length >= 3) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [userEmail, userName, userPassword, confirmPassword]);

  const [validNewUser, setValidNewUser] = useState<boolean>(false);
  useEffect(() => {
    const matchUser = usersRedux.users.find(user => user.email === userEmail);
    if (!matchUser) {
      setValidNewUser(true);
    } else {
      setValidNewUser(false);
    }
  }, [userEmail]);

  const [userNameError, setUserNameError] = useState<boolean>(false);
  useEffect(() => {
    if (userName.length) {
      if (userName.length < 3) {
        setUserNameError(true);
      } else {
        setUserNameError(false);
      }
    } else {
      setUserNameError(false);
    }
  }, [userName]);

  const [userEmailError, setUserEmailError] = useState<boolean>(false);
  useEffect(() => {
    if (userEmail.length) {
      if (userEmail.length < 5) {
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

  const [confirmPasswordError, setConfirmPasswordError] = useState<boolean>(false);
  useEffect(() => {
    if (confirmPassword.length) {
      if (confirmPassword !== userPassword) {
        setConfirmPasswordError(true);
      } else {
        setConfirmPasswordError(false);
      }
    } else {
      setConfirmPasswordError(false);
    }
  }, [confirmPassword]);

  const handleAddUser = () => {
    if (validNewUser) {
      const newUser: UserType = {
        name: userName,
        id: generateID(),
        email: userEmail,
        password: userPassword,
        tasks: []
      };
      dispatch(addUser(newUser));
      setOpenAlert(true);
    } else {
      alert('Usuário já cadastrado!');
    }
  };

  const handleChangePage = () => {
    setPageFade('animate__animated animate__fadeOut');
    setTimeout(() => navigate('/'), 900);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddUser();
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '5px', maxWidth: '500px' }} className={pageFade}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography align="center" variant="h4">
            <img style={{ height: '40px' }} src="./assets/images/taskVault-logo.png" alt="logo" />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center" variant="h4">
            Cadastrar usuário
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <TextField
            error={userNameError}
            helperText={userNameError ? 'Digite um nome válido, no mínimo 3 caracteres' : ''}
            onChange={e => handleUserName(e)}
            fullWidth
            label="Nome do usuário"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            error={userEmailError}
            helperText={userEmailError ? 'Digite um e-mail válido, no mínimo 5 caracteres' : ''}
            onBlur={e => handleUserEmail(e)}
            fullWidth
            id="emailInput"
            label="Email"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          <PasswordField
            error={userPasswordError}
            helperText={userPasswordError ? 'Digite uma senha válida, no mínimo 5 caracteres' : ''}
            onChange={e => handleUserPassword(e)}
            label="Senha"
          ></PasswordField>
        </Grid>

        <Grid item xs={12}>
          <PasswordField
            onKeyDown={handleKeyDown}
            error={confirmPasswordError}
            helperText={confirmPasswordError ? 'As senhas digitadas não conferem!' : ''}
            onChange={e => handleConfirmPassword(e)}
            label="Repita a senha"
          ></PasswordField>
        </Grid>

        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            disabled={!valid}
            onClick={handleAddUser}
            className={valid ? 'animate__animated animate__pulse animate__infinite infinite' : ''}
          >
            Cadastrar
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body2">Já possui uma conta?</Typography>
          <Button onClick={handleChangePage} variant="text">
            Faça login.
          </Button>
        </Grid>
      </Grid>

      <AlertDialogSlide
        description="Você será redirecionado(a) para a página de Login."
        actionConfirm={() => navigate('/')}
        actionCancel={() => navigate('/')}
        openDialog={openAlert}
        title="Conta criada com sucesso!"
        confirmButtonTitle="OK"
      />
    </Paper>
  );
};

export default Register;
