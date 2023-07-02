import { completeIcon } from './completeIcon'
import { deleteIcon } from './deleteIcon'
import './TodoItem.css';

function TodoItem(props) {
    return (
        <li className="TodoItem" >
            <completeIcon />



            <span className={`icon icon-check ${props.completed && "icon-check--active"}`} onClick={props.onComplete} >
                v
            </span>
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
                {props.text}
            </p>

            <deleteIcon />
            <span className="icon icon-delete"
                onClick={props.onDelete} >x
            </span>
        </li>
    );
}

export { TodoItem };
