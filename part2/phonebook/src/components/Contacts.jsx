const Contacts = ({contacts}) => {
    return(
      <div>
        <h2>Numbers</h2>
        <ul>
          {contacts.map(contact =><Contact key={contact.name} contact={contact}/>)}
        </ul>
      </div>
    )
}

const Contact = ({contact}) => <li>{contact.name} : {contact.number}</li>

export default Contacts