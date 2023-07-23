import React from "react";
import { TodoContext} from '../TodoContext'
import './TodoForm.css'

function TodoForm() {
    const {
        setOpenModal,
    } = React.useContext(TodoContext)

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <label>¡Crea un nuevo TODO!</label>
            <textarea
                placeholder="cortar cebolla"
            />
            <div className="TodoForm-buttonContainer">
                <button type="" className="TodoForm-button TodoForm-button--cancel">cancelar</button>

                <button type="submit" className="TodoForm-button TodoForm-button--add">añadir</button>
            </div>
        </form>
    )
}

export { TodoForm };