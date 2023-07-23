import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModa] = React.useState(true);

    

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
            (todo) => todo.text === text
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

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModa,
        }}>
            {children}
        </TodoContext.Provider>
    );
}
export { TodoContext, TodoProvider };

// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//     {text: 'cortar cebolla', completed: true},
//     {text: 'tomar el curso de Intro a React.js', completed: false},
//     {text: 'llorar con la llorona', completed: false},
//     {text: 'LALALALA', completed: false},
//     {text: 'usar estados derivados', completed: true}
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
