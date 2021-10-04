import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Notesapp from './Notesapp'
const App = () => {
    return ( 
      <BrowserRouter>
        <Notesapp />
      </BrowserRouter>
     );
}
 
export default App;