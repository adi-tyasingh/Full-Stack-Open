const Contacts = ({contacts, destroyContact}) => {
    return(
      <div>
        <h2>Numbers</h2>
        <ul>
          {contacts.map(contact =><Contact key={contact.id} contact={contact} destroyContact={() => destroyContact(contact.id)}/>)}
        </ul>
      </div>
    )
}

const Contact = ({contact, destroyContact}) => <li>{contact.name} : {contact.number} <button onClick={destroyContact}> Delete</button></li>

export default Contacts