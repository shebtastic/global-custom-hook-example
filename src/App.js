import React, { useState } from 'react';
import Clicker from './Clicker';

function App() {
  const [clickers, setClickers] = useState([])

  return (
    <div className="App">
      <button onClick={
        () => setClickers([...clickers, <Clicker key={Math.random().toString(36).substring(2)} id={clickers.length} />])
      }>add clicker</button>
      <button onClick={
        () => setClickers(clickers.slice(0, clickers.length - 1))
      }>remove clicker</button>
      {
        clickers
      }
    </div>
  );
}

export default App;
