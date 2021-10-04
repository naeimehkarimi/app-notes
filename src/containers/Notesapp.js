import React from 'react';
import {Route,Switch} from 'react-router-dom'
import Note from '../components/pages/Note';
import Notes from '../components/pages/Notes';
import MainLayout from '../components/layouts/MainLayout';
const Notesapp = () => {
    return ( 
     
         <MainLayout>
            <Switch>
                <Route path='/' exact component={Notes} />
                <Route path='/note/:id' component={Note} />
            </Switch>
         </MainLayout>
     
         

     );
}
 
export default Notesapp;