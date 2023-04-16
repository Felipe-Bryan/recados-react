import React, { useEffect, useMemo, useState } from 'react';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, IconButton, Paper, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import 'animate.css';
import TaskType from '../types/TaskType';
import { useAppDispatch } from '../store/hooks';
import { changeTaskAnimation, editUserTask, removeUserTask } from '../store/modules/usersSlice';

interface TasksListProps {
  data: TaskType[];
}

const TasksList: React.FC<TasksListProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  const [dataLocal, setDataLocal] = useState<TaskType[]>([]);

  useEffect(() => {
    if (data.length) {
      setDataLocal([...data]);
    }
    if (data.length == 0) {
      setDataLocal([]);
    }
  }, [data]);

  const handleDelete = (id: number) => {
    dispatch(changeTaskAnimation(id));

    setTimeout(() => dispatch(removeUserTask(id)), 700);
  };

  const handleEdit = (id: number) => {
    dispatch(editUserTask(id));
  };

  const listMemo = useMemo(() => {
    return dataLocal.map(task => {
      return (
        <Paper key={task.id} elevation={4} className={task.animation} style={{ marginBottom: '5px' }}>
          <ListItem
            secondaryAction={
              <>
                <IconButton
                  onClick={() => handleEdit(task.id)}
                  edge="end"
                  className="animate__animated animate__rubberBand animate__delay-2s	2s"
                >
                  <EditIcon color="success" />
                </IconButton>
                <IconButton
                  onClick={() => handleDelete(task.id)}
                  edge="end"
                  className="animate__animated animate__rubberBand animate__delay-3s	3s"
                >
                  <DeleteIcon color="error" />
                </IconButton>
              </>
            }
          >
            <ListItemAvatar>
              <Avatar>{task.detail[0].toUpperCase()}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={task.detail} secondary={task.description} />
          </ListItem>
        </Paper>
      );
    });
  }, [dataLocal]);

  return (
    <List>
      {dataLocal.length ? (
        listMemo
      ) : (
        <>
          <Typography marginLeft={1} className="animate__animated animate__slideInLeft" variant="body1">
            Nenhum recado cadastrado.
          </Typography>
          <Typography
            marginLeft={1}
            className="animate__animated animate__slideInLeft animate__delay-1s	1s"
            variant="body1"
          >
            Clique no + para cadastrar seu primeiro recado.
          </Typography>
        </>
      )}
    </List>
  );
};

export default TasksList;
