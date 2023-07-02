import React from "react";
import { todoIcon } from './todoIcon';

function deleteIcon() {
    return (
        <todoIcon
            type="delete"
            color="gray"
        />
    );
}

export { deleteIcon };
