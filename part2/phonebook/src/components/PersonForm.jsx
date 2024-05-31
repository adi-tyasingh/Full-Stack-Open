const PersonForm = ({addNumber, newName, setNewName, newNumber, setNewNumber}) => {
    return(
    <form onSubmit={addNumber}>
      <h3>Add a contact</h3>
      <div>
        name: <input value={newName} onChange={(event)=> setNewName(event.target.value)}/> <br/>
        number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
    )
}

export default PersonForm