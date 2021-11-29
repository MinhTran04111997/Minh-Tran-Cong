import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [ newName, setNewName ] = useState('eg. Minh')
  const [newNumber, setnewNumber] = useState('eg. 123456789')
  const [searchName, setsearchName]=useState('')
  
 

const addName = (event) => {
    event.preventDefault()
    const noteObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    
const same=persons.find(object => object.name === noteObject.name)

  console.log(same)
  if (same !== undefined){
    window.alert(`${newName} is already added to phonebook`)
  }
    setPersons(persons.concat(noteObject))
    setNewName('')
    setnewNumber('')
    
}

const comPare = () => {
  
  const newArray=[]
  persons.map((person,i) => newArray[i]=person.name )
  console.log(newArray)
  
  
  if (searchName === ''){
  return (
  persons.map((person) =>
   
  <div key={person.id}>{person.name}: {person.number}</div>
   )
)
  }
if (searchName !== '') {
  return (
  persons.map((person,i) => {
    console.log(newArray[i].toLowerCase().includes(searchName.toLowerCase()))
    if (newArray[i].toLowerCase().includes(searchName.toLowerCase())=== true){
      console.log(persons[i].name)
      console.log(persons[i].number)
      
      return (
        <div key={i}>{person.name}: {person.number}</div>
      )
     
    }
    return (
      <div key={i}></div>
    )
  })
  )
}
  
  
  
}



const handlesearchName = (event) => {
  console.log(event.target.value)
  setsearchName(event.target.value)
  
}



  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
    
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setnewNumber(event.target.value)
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        enter the name to search: 
        <input value ={searchName}
               onChange={handlesearchName}    ></input>
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName}
          onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber}
          onChange={handleNumberChange} /> 
          </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div >{comPare()}</div>
      
          
      
    </div>
  )
}

export default App