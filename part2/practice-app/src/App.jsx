import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'
import noteService from './services/notes'

const App = () => {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("")
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    noteService
      .getAll()
      .then(initialNotes => setNotes(initialNotes))
  }
  useEffect( hook, [])

  const addNote = (event) => {
    event.preventDefault()
    const noteObject={
      content: newNote,
      important: false
    }
    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  const handleNoteChange = (event) => setNewNote(event.target.value)

  const notesToShow = showAll ? notes : notes.filter(x => x.important)

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
  
    noteService
      .update(id, changedNote)
      .then(  returnedNote => setNotes(  notes.map(n => n.id !== id ? n : returnedNote)  )  )
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map(note => 
          <Note 
            key={note.id} 
            note={note} 
            toggleImportance={() => toggleImportanceOf(note.id)}
            />
        )}
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
      <button onClick={()=> setShowAll(!showAll)}> 
          show {showAll? "important":"all"}
      </button>
    </div>
  )
}

export default App