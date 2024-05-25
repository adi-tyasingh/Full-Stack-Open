import { useState } from 'react'
import Contacts from './components/Contacts'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchContact, setSearchContact] = useState('')

  const addNumber = (event) => {
    event.preventDefault()
    if (persons.some((element) => element.name.toLowerCase() === newName.toLowerCase())){
      alert(`${newName} is already present`)
      return
    }
    const newContact = {
      name: newName,
      number : newNumber
    }
    setPersons(persons.concat(newContact))
    setNewName('')
    setNewNumber('')
  } 
  
  const toShow = persons.filter(person => person.name.toLowerCase().includes(searchContact.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchContact={searchContact} setSearchContact={setSearchContact}/>
      <PersonForm 
      addNumber={addNumber} 
      newName={newName} setNewName={setNewName} 
      newNumber={newNumber} setNewNumber={setNewNumber}/>
      <Contacts contacts={toShow}/>
    </div>
  )
}

export default App