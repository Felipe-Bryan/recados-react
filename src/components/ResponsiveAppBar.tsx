import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import 'animate.css';
import { useAppDispatch } from '../store/hooks';
import { logout } from '../store/modules/usersSlice';

const ResponsiveAppBar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    localStorage.removeItem('loggedUser');
    dispatch(logout());
    navigate('/');
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            className="animate__animated animate__slideInLeft"
          >
            <img style={{ height: '25px' }} src="./assets/images/taskVault-logo.png" alt="logo" />
          </Typography>
          <Button onClick={handleLogout} color="inherit" className="animate__animated animate__slideInLeft">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ResponsiveAppBar;
