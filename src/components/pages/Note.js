import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Note = ({ match, history }) => {
    const [note, setNote] = useState(null);
    let noteId = match.params.id;
    useEffect(() => {
        getNote();
    }, [noteId]);
    const getNote = async () => {
        if (noteId === 'new') return;
        const response = await axios.get(`http://localhost:5000/notes/${noteId}`);
        setNote(response.data);
    };
    const handleDeleteNote = async () => {
       await axios.delete(`http://localhost:5000/notes/${noteId}`);
        history.push('/');
    };
    const handleUpdateNote = async () => {
        await axios.put(`http://localhost:5000/notes/${noteId}`,note);
         history.push('/');
     };
     const handleAddNote=async()=>{
       const newNote= await axios.post(`http://localhost:5000/notes/`,{ ...note, updated: new Date() });
       setNote(newNote);
     }
     const handleSubmit=()=>{
        if (noteId !== 'new') {
           handleUpdateNote();
        } else if (noteId === 'new' && note !== null) {
            handleAddNote();
        }

        history.push('/');  
    }
    return (
        <div className='note'>
            <div className='note-header'>
                <h3>
                    <Link onClick={handleSubmit} to={'/'}><i class="fa fa-angle-right"></i></Link>
                </h3>
                {noteId !== 'new' ? <button onClick={handleDeleteNote}><i class="fa fa-trash-o"></i></button> : <button onClick={handleSubmit}><i class="fa fa-check"></i></button>}
            </div>
            <textarea onChange={e=>{setNote({...note,body:e.target.value})}} value={note ? note.body : null}></textarea>
        </div>
    );
};

export default Note;
