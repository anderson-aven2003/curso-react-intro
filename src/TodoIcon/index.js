import { ReactComponent as CheckSVG } from './bx-check-double.svg';
import { ReactComponent as DeleteSVG } from './bx-x-circle.svg';
import './TodoIcon.css';

const iconType = {
    "check": (color) => <CheckSVG className="icon-svg" fill={color} />,
    "delete":(color) => <DeleteSVG className="icon-svg" fill={color} />
};

function TodoIcon({ type, color, onClick }){
    return (
        <span className={`icon-container icon-container-${type}`}
        onClick={onClick}
        >
            {iconType[type](color)}
        </span>
    )
}

export { TodoIcon };