import React from 'react';
import { useState } from 'react';
import Panel from './components/Panel/Panel';
import SyncedInput from './components/SyncedInput/SyncedInput';
import Search from './components/Search/Search';
import {foods, filterItems} from './components/Search/data.js'
import HideShow from './components/HideShow/HideShow.jsx';
import Age from './components/Age/Age.jsx';

//State lifting means moving the state management from a child component up to its parent so that multiple child components can share and control the same state. It is done when state is mantained in parent as done in this example.

const Main = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [name, setName] = useState('');
  const [query, setQuery] = useState('');
  const [hide, setHide] = useState(false);
  const [age, setAge] = useState('');


  function changeName(e){
    setName(e.target.value) 
  }

  function handleQuery(e){
    setQuery(e.target.value) 
  }

  function changeAge(e){
    setAge(e.target.value)
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
      </>
  );

 
};

export default Main;
