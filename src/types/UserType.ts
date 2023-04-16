import TaskType from './TaskType';

interface UserType {
  name: string;
  id: number;
  email: string;
  password: string;
  tasks: TaskType[];
}

export default UserType;
