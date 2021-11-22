import React, { FC } from 'react';
import './App.sass';
import { NewTask } from './components/NewTask/NewTask';
import { TaskList } from './components/TaskList/TaskList';

const App: FC = () => {
  return (
    <main>
      <NewTask />
      <TaskList />
    </main>
  );
};

export default App;