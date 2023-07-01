import React from 'react';
import './TodoSearch.css';

function TodoSearch() {

    const [searchValue, setSearchValue] = React.useState('');

    console.log('los usuarios buscan TODOS de ' + searchValue);

    return (
        <input placeholder="cortar cebolla" className="TodoSearch" value={searchValue} onChange={(event) => {
            setSearchValue(event.target.value);
        }} />
    );
}

export { TodoSearch };