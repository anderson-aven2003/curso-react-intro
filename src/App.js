import { TodoCounter} from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      {/* <CreateTodoButton /> */}


    </div>
  );
}



function TodoItem() {
  return (
    <li>
      <span>v</span>
      <p>Llorar con la llorona</p>
      <span>x</span>
    </li>
  );
}

export default App;
