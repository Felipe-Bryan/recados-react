import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import UserType from '../../types/UserType';
import TaskType from '../../types/TaskType';

interface UsersState {
  users: UserType[];
  loggedUserIndex: number;
  taskToEditIndex: number;
}

const initialState: UsersState = {
  users: [],
  loggedUserIndex: -1,
  taskToEditIndex: -1
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserType>) => {
      state.users.push(action.payload);
    },
    setLoggedUserIndex: (state, action: PayloadAction<number>) => {
      state.loggedUserIndex = action.payload;
    },
    addUserTask: (state, action: PayloadAction<TaskType>) => {
      state.users[state.loggedUserIndex].tasks.push(action.payload);
    },
    changeTaskAnimation: (state, action: PayloadAction<number>) => {
      const index = state.users[state.loggedUserIndex].tasks.findIndex(task => task.id === action.payload);

      state.users[state.loggedUserIndex].tasks[index].animation = 'animate__animated animate__slideOutLeft';
    },
    removeUserTask: (state, action: PayloadAction<number>) => {
      const index = state.users[state.loggedUserIndex].tasks.findIndex(task => task.id === action.payload);

      state.users[state.loggedUserIndex].tasks.splice(index, 1);
    },
    editUserTask: (state, action: PayloadAction<number>) => {
      const index = state.users[state.loggedUserIndex].tasks.findIndex(task => task.id === action.payload);

      state.taskToEditIndex = index;
    },
    saveEditedTask: (state, action: PayloadAction<TaskType>) => {
      state.users[state.loggedUserIndex].tasks[state.taskToEditIndex] = action.payload;
    },
    logout: state => {
      state.loggedUserIndex = -1;
      state.taskToEditIndex = -1;
    }
  }
});

export const {
  addUser,
  setLoggedUserIndex,
  addUserTask,
  removeUserTask,
  changeTaskAnimation,
  logout,
  editUserTask,
  saveEditedTask
} = usersSlice.actions;

export default usersSlice.reducer;
