import './App.css';
import Heading from './components/Heading';
import CreateNote from './components/CreateNote';
import { useEffect, useState } from 'react';

function App() {
  const initNote = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [];

  const [note, setNote] = useState('');
  const [notes, setNotes] = useState(initNote);
  const [isEditing, setIsEditing] = useState(false);
  const [currentNoteIndex, setCurrentNoteIndex] = useState(null);
  
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleInputChange = (e) => {
    setNote(e.target.value);
  };

  const addNote = () => {
    if (isEditing) {
      const updatedNotes = notes.map((item, index) =>
        index === currentNoteIndex ? note : item
      );
      setNotes(updatedNotes);
      setIsEditing(false);
      setCurrentNoteIndex(null);
    } else {
      if (note && !notes.includes(note)) {
        setNotes([...notes, note]);
      }
    }
    setNote('');
  };

  const handleDelete = (indexToDelete) => {
    setNotes(notes.filter((_, index) => index !== indexToDelete));
  };

  const handleEdit = (noteToEdit, index) => {
    setNote(noteToEdit);
    setIsEditing(true);
    setCurrentNoteIndex(index);
  };

  return (
    <>
      <Heading />
      <CreateNote
        handleInputChange={handleInputChange}
        addNote={addNote}
        note={note}
        notes={notes}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        isEditing={isEditing}
      />
    </>
  );
}

export default App;
