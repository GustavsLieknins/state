import logo from './logo.svg';
import React, { useState } from 'react';
import Style from "./global.css";

function App() {
  const [count, setCount] = useState([]);
  const thing = count.map(img => {
    return img
  });
  const length = count.length;
  const thingminus = count.map(img => {
    return img
  })
  function removeLode(){
    const size = count[length];
  };
  return (
    <>
    <h1>Gusis OG lode sip count</h1>
    <button  onClick={() => setCount([...count, <img src="./lode2.png" width="60px" height="160px"/>])}>Lode + count</button>
    <button  onClick={removeLode()}>Lode - count</button>
    <br></br>
    <br></br>
    {thing}

    </>
  );
}

export default App;
