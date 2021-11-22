import { FC } from 'react';
import './NewTask.sass';

export const NewTask: FC = () => {
  return (
    <div className = 'NewTask'>
      <input className = 'NewTask__input'></input>
      <button className = 'NewTask__button'>Создать</button>
    </div>
  )
}