import './App.css'
//import { Component } from 'react'
import { UserClass, UserFunction, UserChildren } from './user'
//import  Komponents  from './Komponents'
import { useState } from 'react'

function App() {

    const initialUsers = [
      { name: 'Ivan', years: 30, },
      { name: 'Marko', years: 35 },
      { name: 'Ana', years: 25 },
    ];

    const[users, setUsers] = useState(initialUsers)

    const tekst = "Proizvoljan tekst"

    const uvecajGodine = () => {
      setUsers(prevState => {
        const updateUsers = prevState.map(user => {
          return { ...user, years: user.years + 1}
        })
        return updateUsers
      })
    }

    const handleChangeName = event => {
      //console.log("handleChangeName", event.target.value)
      const newUsers = [...users]
      newUsers[1].name = event.target.value
      setUsers(newUsers)
    }



    return (
      <>
        <h1>State</h1>
        <UserClass name={users[0].name} years={users[0].years} />
        <UserFunction name={users[1].name} years={users[1].years} changeName={handleChangeName}/>
        <UserChildren name={users[2].name} years={users[2].years}>
          {tekst}
        </UserChildren>
        <button onClick={uvecajGodine}> Uvecaj godine</button>
      </>
    )
  }

export default App
