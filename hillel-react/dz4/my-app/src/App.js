import React from 'react';
import './App.css';
import NoteDesk from './components/note-desk/NoteDesk';



function App() {
  return (
    <>
     <header>Note Desk App</header>
     <div className='wrapper'><NoteDesk /></div>
     
    </> 
  );
}

export default App;