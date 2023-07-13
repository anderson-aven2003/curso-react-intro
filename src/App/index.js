import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../createTodoButton';
import { useLocalStorage } from './useLocalStorage';

// const defaultTOdos = [
//   { text: "cortar cebolla", completed: false },
//   { text: "tomar el curso de intro a react.js", completed: false },
//   { text: "llorar con la llorona", completed: false },
//   { text: "lalalala", completed: false },
//   { text: "usar estados derivados", completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTOdos));
// localStorage.removeItem('TODOS_V1')




function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );



  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  console.log('los usuarios buscan TODOS de ' + searchValue);

  return (
    <div className='contenedor'>
      <>
        <TodoCounter completed={completedTodos}
          total={totalTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <TodoList>
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />

          ))}
        </TodoList>

        <CreateTodoButton />
      </>
    </div>
  );
}

export default App;
