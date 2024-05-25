const Filter = ({searchContact,  setSearchContact}) => {
    return (
    <>
      <h3>Filter</h3>
      <div>
        Search: <input type="text" value={searchContact} onChange={(event) => setSearchContact(event.target.value)}/>
      </div>
    </>
    )
}

export default Filter