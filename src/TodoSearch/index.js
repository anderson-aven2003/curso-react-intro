import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../1';

function TodoSearch() {

    const {
        searchValue,
        setSearchValue } = React.useContext(TodoContext);

    return (
        <input
            placeholder="Vamos busca tu TODO!!!"
            className="TodoSearch"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }} />
    );
}

export { TodoSearch };