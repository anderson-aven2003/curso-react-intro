import {ReactComponent as checkSVG} from './bx-check-double.svg';
import { ReactComponent as deleteSVG } from './bx-x-circle.svg';

function TodoIcon({type}){
    return(
        <span className={`Icon Icon-svg Icon-${type}`}>
            <checkSVG />
        </span>
    )
}

export {TodoIcon};