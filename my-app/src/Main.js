import React from 'react';
import { useState, useRef } from 'react';
import Panel from './components/Panel/Panel';
import SyncedInput from './components/SyncedInput/SyncedInput';
import Search from './components/Search/Search';
import {foods, filterItems} from './components/Search/data.js'
import HideShow from './components/HideShow/HideShow.jsx';
import Age from './components/Age/Age.jsx';
import Color from './components/Color/Color.jsx';
import Toggle from './components/ToggleBackground/ToggleBackground.jsx';

//State lifting means moving the state management from a child component up to its parent so that multiple child components can share and control the same state. It is done when state is mantained in parent as done in this example.

const Main = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [name, setName] = useState('');
  const [query, setQuery] = useState('');
  const [hide, setHide] = useState(false);
  const [age, setAge] = useState('');
  const [click, setClick] = useState(0);
  const [dark, toggleDark] = useState('white');

  const divRef = useRef(null);

  function darkMode(){
    toggleDark(dark === 'white' ? 'black' : 'white')
  }

  function changeName(e){
    setName(e.target.value) 
  }

  function handleQuery(e){
    setQuery(e.target.value) 
  }

  function changeAge(e){
    setAge(e.target.value)
  }

  function handleClick(){
    setClick(click+1)
  }

  function getRandomColor(){
      let r = 150 + Math.round(100 * Math.random());
      let g = 150 + Math.round(100 * Math.random());
      let b = 150 + Math.round(100 * Math.random());
      return `rgb(${r}, ${g}, ${b})`;
  }

  function changeColor(e){
    e.stopPropagation(); // prevents from propagating the event to root element (bubbling up)
    if(divRef.current){
      divRef.current.style.backgroundColor = getRandomColor()
    }
  }

  const result = filterItems(foods, query)

  return (
    <>
      <h4>Almaty, Kazakhstan</h4>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>

      <h4>Synced Inputs below :</h4>
      <SyncedInput name={name} setName={changeName}> </SyncedInput>
      <SyncedInput name={name} setName={changeName}> </SyncedInput>
      <Search query={query} onChange={handleQuery} list={result}/>

      <HideShow hide={hide} toggleHide={() => setHide(!hide)} />
      
      <Age age={age} changeAge={changeAge} />
      <Color style={{"border": "10px solid black"}} getClick={handleClick} clicks={click} colorChange={changeColor} divRef={divRef}/>
      <br/>
      <Toggle style={{"border": "5px solid red"}} toggleBackground={darkMode} col={dark} />
      </>
  );

 
};

export default Main;
