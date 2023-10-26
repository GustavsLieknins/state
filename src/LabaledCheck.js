import logo from './logo.svg';
import React, { useState } from 'react';
import Style from "./global.css";
import Check from './Check.js';

function LabaledCheck(props) {
  function handleOnChange(){
    setCount(!count)
  }
  const [count, setCount] = useState(props.boolean);
  return (
    <>
    <lable name={props.name}>{props.name}</lable>
    <input name={props.name} type="checkbox" defaultChecked={count} onChange={handleOnChange} />
    </>
  );
}

export default LabaledCheck;
