import { Fab, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TasksList from '../components/TasksList';
import AddIcon from '@mui/icons-material/Add';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import TaskType from '../types/TaskType';
import AddTaskDialog from '../components/AddTaskDialog';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import generateID from '../utils/generateID';
import { addUserTask, changeTaskAnimation, editUserTask, saveEditedTask } from '../store/modules/usersSlice';
import 'animate.css';

const Home: React.FC = () => {
  // Pegar os usuários cadastrados do Redux
  const usersRedux = useAppSelector(state => state.users);

  // Declaração de hooks
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // Controlar estado do modal de recados
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  // Controlar estado do detalhe do recado a ser inserido
  const [taskDetail, setTaskDetail] = useState<string>('');
  const handleTaskDetail = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setTaskDetail(e.target.value);
  };

  // Controlar estado da descrição do recado a ser inserido
  const [taskDescription, setTaskDescription] = useState<string>('');
  const handleTaskDescription = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setTaskDescription(e.target.value);
  };

  // Controlar a montagem do recado a ser inserido
  const [newTask, setNewTask] = useState<TaskType>({ id: 0, description: '', detail: '', animation: '' });
  useEffect(() => {
    setNewTask({
      id: generateID(),
      detail: taskDetail,
      description: taskDescription,
      animation: 'animate__animated animate__slideInLeft'
    });
  }, [taskDetail, taskDescription]);

  // Adiciona o recado no array de recados do usuário logado
  const saveTask = () => {
    dispatch(addUserTask(newTask));

    handleClearNewTaskInputs();

    setOpenDialog(false);
  };

  // limpar os campos do modal
  const handleClearNewTaskInputs = () => {
    setTaskDetail('');
    setTaskDescription('');
  };

  // Controlar os estados de erros e habilitar o botão de salvar o recado
  const [detailError, setDetailError] = useState<boolean>(false);
  const [descriptionError, setDescriptionError] = useState<boolean>(false);
  const [detailErrorText, setDetailErrorText] = useState<string>('');
  const [descriptionErrorText, setDescriptionErrorText] = useState<string>('');
  const [enableButton, setEnableButton] = useState<boolean>(false);

  useEffect(() => {
    if (taskDetail.length) {
      if (taskDetail.length <= 1) {
        setDetailError(true);
      } else {
        setDetailError(false);
      }
    }

    if (taskDescription.length) {
      if (taskDescription.length <= 1) {
        setDescriptionError(true);
      } else {
        setDescriptionError(false);
      }
    }

    if (taskDetail.length <= 1 || taskDescription.length <= 1) {
      setEnableButton(false);
    } else {
      setEnableButton(true);
    }
  }, [taskDetail, taskDescription]);

  useEffect(() => {
    if (detailError) {
      setDetailErrorText('Detalhe deve ter 2 caracteres ou mais');
    } else {
      setDetailErrorText('');
    }

    if (descriptionError) {
      setDescriptionErrorText('Descrição deve ter 2 caracteres ou mais');
    } else {
      setDescriptionErrorText('');
    }
  }, [detailError, descriptionError]);

  // Controlar a função de editar recado
  const [editTask, setEditTask] = useState<boolean>(false);

  useEffect(() => {
    if (usersRedux.taskToEditIndex >= 0) {
      setEditTask(true);
      setOpenDialog(true);
      setTaskDetail(usersRedux.users[usersRedux.loggedUserIndex].tasks[usersRedux.taskToEditIndex].detail);
      setTaskDescription(usersRedux.users[usersRedux.loggedUserIndex].tasks[usersRedux.taskToEditIndex].description);
    }
  }, [usersRedux.taskToEditIndex]);

  const saveEdit = () => {
    if (editTask) {
      dispatch(changeTaskAnimation(usersRedux.users[usersRedux.loggedUserIndex].tasks[usersRedux.taskToEditIndex].id));

      setTimeout(() => dispatch(saveEditedTask(newTask)), 700);

      setTimeout(() => {
        dispatch(editUserTask(-1));
        handleClearNewTaskInputs();
      }, 800);

      setEditTask(false);

      setOpenDialog(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (enableButton) {
        if (!editTask) {
          saveTask();
        } else {
          saveEdit();
        }
      }
    }
  };

  if (usersRedux.loggedUserIndex >= 0) {
    return (
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <ResponsiveAppBar />
        </Grid>

        <Grid item xs={12}>
          <Typography marginLeft={2} variant="h5" className="animate__animated animate__slideInLeft">
            Bem vindo, {usersRedux.users[usersRedux.loggedUserIndex].name}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} style={{ margin: '0px 7px' }}>
          <TasksList data={usersRedux.users[usersRedux.loggedUserIndex].tasks} />
        </Grid>

        <Fab
          sx={{ position: 'fixed', bottom: 20, right: 20 }}
          color="primary"
          aria-label="add"
          onClick={handleOpenDialog}
          className="animate__animated animate__zoomIn animate__delay-2s	2s"
          size="large"
        >
          <AddIcon />
        </Fab>

        <AddTaskDialog
          onKeyDownAction={handleKeyDown}
          enableButton={!enableButton}
          detailError={detailError}
          detailErrorText={detailErrorText}
          descriptionError={descriptionError}
          descriptionErrorText={descriptionErrorText}
          actionConfirm={!editTask ? saveTask : saveEdit}
          confirmButtonTitle={!editTask ? 'Salvar' : 'Editar'}
          cancelButtonTitle="Cancelar"
          title={!editTask ? 'Adicionar novo recado' : 'Editar recado'}
          openDialog={openDialog}
          actionCancel={() => {
            setOpenDialog(false);
            setEditTask(false);
            dispatch(editUserTask(-1));
            handleClearNewTaskInputs();
          }}
          onChange1={handleTaskDetail}
          onChange2={handleTaskDescription}
          valueInput1={taskDetail}
          valueInput2={taskDescription}
        />
      </Grid>
    );
  } else {
    useEffect(() => navigate('/'));
    return <></>;
  }
};

export default Home;
