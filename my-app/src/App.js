import './App.css';
import Counter from './components/Counter/Counter';
import UserCard from './components/Card/UserCard';
import Propcard from './components/Props/Propcard';
import Button from './components/button';
import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }

  return (
  <div className='container'>
      <UserCard name="Love Babbar" desc="descrption 1" image="/lovepic.jpeg" style={{"border-radius":"30px"}}/>
      <UserCard name="Maharana Pratap" desc="descrption 2" image="/maharanapic.jpeg"/>
      <UserCard name="Prithvi Raj Chauhan" desc="descrption 3" image="/prithviraj.jpeg"/>
      <Counter/>
      <Propcard name="dushyant">
        <h1>Best web dev course</h1>
        <p>This is the best course</p>
        <p>this will be completed soon</p>
      </Propcard>
      <Propcard>
        <h1>hi, this side Dushyant Kashyap</h1>
      </Propcard>

      <Button incrementCount = {handleClick}>
        <p>clicked {count} times</p>
      </Button> {/*passing a function(handleClick) to child as prop*/}
  </div>
 
  );
}

export default App;
