import './App.css';
import contactList from './contacts.json'
import { useState } from 'react';


function App() {

  let contacts = contactList.slice(0, 5)

  const [contact, setContact] = useState(contacts)

  let randomContact = contactList[Math.floor(Math.random() * contactList.length)]
  let newContacts = [...contact, randomContact]

  const addRandom = () => {
    console.log("randomContact: ", randomContact)
    console.log("newContacts: ", newContacts)
    setContact(newContacts)
  }

  const sortedName = [...contact].sort((a, b) => a.name.localeCompare(b.name));

  const sortByName = () => {
    setContact(sortedName);
  };

  const sortedPopularity = [...contact].sort((a, b) => b.popularity - a.popularity)

  const sortByPopularity = () => {
    setContact(sortedPopularity)
  }


  const deleteContact = (id) => {
    const updatedList = contact.filter((contact) => contact.id !== id);
    setContact(updatedList);
  };


  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th colSpan="3">IronContacts</th>
          </tr>
          <tr>
            <th colSpan="5"><button className='btn btn-info' onClick={addRandom}>Add Random Contact</button><button className='btn btn-info' onClick={sortByName}>Sort by name</button><button className='btn btn-info' onClick={sortByPopularity}>Sort by popularity</button></th>
          </tr>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Delete Contact</th>
          </tr>
        </thead>
        <tbody>
          {newContacts.map((contact) =>
            <tr key={contact.id}>
              <td><img src={contact.pictureUrl} alt="fotoPerfil" /> </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              {contact.wonOscar ? <td><i className="fa-solid fa-trophy"></i></td> : <td></td>}
              {contact.wonEmmy ? <td><i className="fa-solid fa-trophy"></i></td> : <td></td>}
              <td><button onClick={() => deleteContact(contact.id)}>Delete Contact</button></td>
            </tr>
          )}
        </tbody>
      </table>

    </div >
  );
}

export default App;

