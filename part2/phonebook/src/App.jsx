import { useState, useEffect } from 'react'
import personService from './services/persons'
import Contacts from './components/Contacts'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchContact, setSearchContact] = useState('')
  const [message, setMessage] = useState(null)
  const [messageStyle, setMessageStyle] = useState('success')

  const hook = () => {
    personService
      .getAll()
      .then(response => setPersons(response))
  }
  
  useEffect(hook,[])

  const addNumber = (event) => {
    event.preventDefault()

    if (persons.some((element) => element.name.trim().toLowerCase() === newName.trim().toLowerCase())){
      if ( window.confirm( `${newName} already exists! would you like to change the number?` ) )
      {
        const person = persons.find((element) => element.name.trim().toLowerCase() === newName.trim().toLowerCase())
        const newContact = 
        {
          ...person, 
          number: newNumber
        }
        personService
          .update(person.id, newContact)
          .then(response => 
          {
            setPersons( persons.map( p => p.id === person.id ? newContact : p ) )
            setMessage(`Contact for ${newName} has been updated`)
            setNewName('')
            setNewNumber('')
            setTimeout( () => setMessage(null), 5000)
          })
          .catch(error => {
            setMessageStyle('error')
            setMessage(`contact for '${newName}' was already removed from server`)
            setTimeout(() => {
              setMessage(null)
              setMessageStyle('success')
            }, 5000)
            setPersons(persons.filter(n => n.id !== person.id))
          })
        return
      }
    }

    const newContact = {
      name: newName,
      number : newNumber
    }
    personService
      .create(newContact)
      .then( response => {
        setPersons( persons.concat(response) )
        setMessage(`Contact for ${newName} has been added`)
        setNewName('')
        setNewNumber('')
        setTimeout( () => setMessage(null), 5000)
      })
  }
  
  const destroyContact = (id) => {
    const person = persons.find(p => p.id === id)
    if(window.confirm(`Do you want to delete ${person.name} ?`)){
      personService
        .destroy(id)
        .then(response => {
          setPersons( persons.filter(person => person.id !== id) )
          setMessage(`Contact for ${person.name} has been deleted`)
          setTimeout(() => setMessage(null), 5000)
        })
    }
  }
  
  const toShow = persons.filter(person => person.name.toLowerCase().includes(searchContact.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Notification message={message} className={messageStyle}/>

      <Filter searchContact={searchContact} setSearchContact={setSearchContact}/>
      
      <PersonForm 
      addNumber={addNumber} 
      newName={newName} setNewName={setNewName} 
      newNumber={newNumber} setNewNumber={setNewNumber}/>
      
      <Contacts contacts={toShow} destroyContact={destroyContact}/>
    </div>
  )
}

export default App