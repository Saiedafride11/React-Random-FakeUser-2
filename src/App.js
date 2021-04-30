import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import User from './Component/User/User';

function App() {
  const [users, setUsers] = useState([]);

  const [addUser, setAddUser] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=15')
    .then(response => response.json())
    .then(data => {
      // console.log(data.results);
      setUsers(data.results)
    })
    .catch(error => console.log(error))
  }, []);

  const addhandleClick = (addusers) => {
    // console.log("hello", addusers);
    const newAddUser = [...addUser, addusers];
    setAddUser(newAddUser);
  }
  return (
    <div className="App">

        <h2>Team Builder Added - {addUser.length}</h2>

          {
            addUser.map( (add) => <li key={add.phone}>{add}</li>)
          }

         
          
        {/* <ul>
          {
            users.map(user =>  <li>{user.name.title} {user.name.first} {user.name.last}</li>)
          }
        </ul> */}


          {
            users.map(user => <User user={user} addhandleClick={addhandleClick} key={user.phone} ></User>)
          }

        
    </div>
  );
}

export default App;
