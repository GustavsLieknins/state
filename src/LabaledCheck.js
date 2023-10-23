import logo from './logo.svg';
import React, { useState } from 'react';
import Style from "./global.css";
import Check from './Check.js';

function LabaledCheck(props) {
  const [count, setCount] = useState(0);
  const [count, setCount] = useState(props.boolean);

  const checkboxi = booleeeani.map((booleeean, i) => {
    return <Check boolean={booleeean} />
  })
  return (
    <>
    <lable name={props.name}></lable>
    <input name={props.name} type="checkbox" defaultChecked={count} />
    </>
  );
}

export default LabaledCheck;
