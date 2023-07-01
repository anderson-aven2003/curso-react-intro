import './createTodoButton.css';

function CreateTodoButton (){
    return(
        <button className="createTodoButton" onClick={
            (avent) => {
                console.log('le diste click')
                console.log(avent)
            }
        }>+</button>
    );
}

export {CreateTodoButton};