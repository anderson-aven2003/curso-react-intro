import React from 'react';
import './TodosLoading.css';

function TodosLoading() {

    return (
        <div className='loadingTodo-container'>
            <span className='loadingTodo-completeIcon'></span>
                <p className='loadingTodo-text'></p>
                <span className='loadingTodo-deleteIcon'></span>
        </div>
    );
}

export { TodosLoading };