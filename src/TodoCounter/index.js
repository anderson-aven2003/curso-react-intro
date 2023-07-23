import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../1';

function TodoCounter() {
    const {
        completedTodos,
        totalTodos, } = React.useContext(TodoContext);

    return (
        <h1 className='TodoCounter'>
            Has completado <span className='span-numero'>{completedTodos}</span> de <span className='span-numero2'>{totalTodos}</span> TODOS
        </h1>
    );
}



export { TodoCounter }