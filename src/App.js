import React, { useState } from 'react';
import Character from './Character';
import { setAllFounded } from './helpers';

function App() {
  const [char] = useState(new Character('ada'));
  console.log(char);

  return (
    <div>
      <button onClick={() => {
        setAllFounded(char);
        console.log(char);
      }}>set all</button>
      <button onClick={() => {
        char.updateRandomLevels(100);
        console.log(char);
      }}>lvl</button>
      <button onClick={() => {
        char.getRandomItems();
        console.log(char);
      }}>rnd</button>
    </div>
  );
}

export default App;
