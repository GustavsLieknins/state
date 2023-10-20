import logo from './logo.svg';
import Style from "./global.css";
import Counter from './Counter.js';
import React, { useState } from 'react';
function Hellow(props) {
const [name, setName] = useState(props.value);
  return (
    <>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hellow! {name}</p>

    </>
  );
}

export default Hellow;