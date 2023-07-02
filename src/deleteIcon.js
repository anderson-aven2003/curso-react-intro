import React from "react";
import {TodoIcon} from './todoIcon';

function deleteIcon() {
    return (
        <todoIcon
            type="delete"
            color="gray"
        />
    );
}

export { deleteIcon };
