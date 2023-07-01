import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './createTodoButton';


const defaultTOdos = [
  { text: "cortar cebolla", completed: true },
  { text: "tomar el curso de intro a react.js", completed: false },
  { text: "llorar con la llorona", completed: false },
  { text: "lalalala", completed: false },
]

function App() {
  return (

    <div className='contenedor'>
    <>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTOdos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
    </div>
  );
}

export default App;
