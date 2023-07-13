import { useState, useEffect } from 'react'
import Addform from './components/Addform'
import Person from './components/Person'
import Search from './components/Search'
import Notification from './components/Notification'
import personServices from './services/person'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [searchName, setSearchName] = useState('')
  const [searchPerson, setSearchPerson] = useState('')
  const [message,setMessage] = useState('hjggkjj')

  useEffect(() => {
    personServices
      .getAll()
      .then(initialPerson => setPersons(initialPerson))
  }, [])

  const changeName = (event) => {
    setNewName(event.target.value);
  }

  const changePhone = (event) => {
    setNewPhone(event.target.value)
  }

  const changeSearch = (event) => {
    setSearchName(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const isPresent = persons.find(element => element.name === newName)
    if (isPresent) {
      if (window.confirm(`${newName} is already added in the phonebook, replace the old number with the new one`)) {
        const updatedPerson = { ...isPresent, number: newPhone }
        personServices
          .update(isPresent.id, updatedPerson)
          .then(returnPerson => setPersons(persons.map(x => x.id != isPresent.id ? x : returnPerson)))
          .catch(console.log('error occur'))
        setNewName('')
        setNewPhone('')
      }
    }
    else {
      const newPerson = { name: newName, number: newPhone }
      personServices
        .create(newPerson)
        .then(returnPerson => setPersons(persons.concat(returnPerson)))
        .catch(() => console.log("error  occur in adding "))
      setNewName('')
      setNewPhone('')
    }
  }

  const search = () => {
    const isPresent = persons.find(person => person.name === searchName)
    if (isPresent)
      setSearchPerson(isPresent)
    else{
      setMessage('This person is not present in Phonebook')
      setSearchName('')
    }
  }

  const deleteHandler = (id,name) => {
    const updatedPeople = persons.filter(person => person.id != id)
    if (window.confirm(`Delete ${name}`)) {
      personServices
        .deletePeople(id)
        .then(setPersons(updatedPeople))
        .catch(() => console.log("error  occur in updating "))
    }
  }
  

  return (
    <div>
      <Notification message={message} messageHandler={setMessage}/>
      <h2>Phonebook</h2>
      <Search name={searchName} changefun={changeSearch} search={search} searchPerson={searchPerson} />
      <h3>Add new Number:</h3>
      <Addform submitHandler={submitHandler} newName={newName} changeName={changeName} newPhone={newPhone} changePhone={changePhone} />
      <h3>Numbers:</h3>
      {persons.map(person => <Person key={person.id} person={person} deleteHandler={() => deleteHandler(person.id,person.name)} />)}
    </div>
  )
}

export default App