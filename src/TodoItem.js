import './TodoItem.css';

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span className={`icon icon-check ${props.completed && "icon-check--active"}`}>v</span>
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
            <span className="icon icon-delete">x</span>
        </li>
    );
}

export {TodoItem};