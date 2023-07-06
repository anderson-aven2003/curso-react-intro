import './TodoCounter.css';

function TodoCounter({total, completed}) {
    return (
        <h1 className='TodoCounter'>
            Has completado <span className='span-numero'>{completed}</span> de <span className='span-numero2'>{total}</span> TODOS
        </h1>
    );
}



export {TodoCounter}