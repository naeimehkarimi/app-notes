import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Notes = () => {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        getNotes();
    }, []);
    const getNotes = async () => {
        const response = await axios.get(' http://localhost:5000/notes');
console.log(response)
        setNotes(response.data);
    };
    const getTime = time => {
        let localTime = new Date(time).toLocaleDateString('fa-IR');
        return localTime;
    };

    let getTitle = note => {
  
     
            return note.body.slice(0, 50);
       
    };

    let getContent = note => {
        let title = getTitle(note);
       
       let content = note.body.replaceAll(title, '');

        if (content.length > 50) {
            return content.slice(0, 50) + '...';
        } else {
            return content;
        }
    };
    return (
        <div className='notes'>
            <div className='notes-header'>
                <h2 className='notes-title'>&#9782; یادداشت ها</h2>
                <p className='notes-count'>{notes.length}</p>
            </div>

            {notes.map((note, index) => (
                <Link to={`/note/${note.id}`} key={index}>
                    <div className='notes-list-item'>
                        <h3>{getTitle(note)}</h3>
                        <p>
                            
                            {getContent(note)}
                        </p>
                        <span>{getTime(note.updated)}</span>
                    </div>
                </Link>
            ))}
            <Link to={'/note/new'} className='floating-button'>
                <i className='fa fa-plus'></i>
            </Link>
        </div>
    );
};

export default Notes;
