import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../1';

function App() {
return(
    <TodoProvider>
        <AppUI />
    </TodoProvider>
);
}
export default App;

    // console.log('los usuarios buscan TODOS de ' + searchValue ); 
    // searchValue
