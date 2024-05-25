import { useState } from 'react'
import Note from './components/Note'

const App = ({ notes }) => {

  const [note, setNotes] = useState(notes)
  const [newNote, setNewNote] = useState("")
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    //console.log("button clicked", event.target)
    const noteObject={
      id: note.length + 1,
      content: newNote,
      important: Math.random() < 0.5
    }
    setNotes(note.concat(noteObject))
    setNewNote("")
  }

  const handleNoteChange = (event) => {
    //console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? note : note.filter(x => x.important)


  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
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