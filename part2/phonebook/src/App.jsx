import { useState, useEffect } from 'react'
import axios from 'axios'
import Contacts from './components/Contacts'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchContact, setSearchContact] = useState('')

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then( (response) => setPersons(response.data))
  }
  
  useEffect(hook,[])

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