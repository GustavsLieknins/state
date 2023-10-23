import logo from './logo.svg';
import React, { useState } from 'react';
import Style from "./global.css";

function Check(props) {

const [count, setCount] = useState(props.boolean);
  return (
    <>
    <lable name={props.name}></lable>
    <input name={props.name} type="checkbox" defaultChecked={count} />
    </>
  );
}

export default Check;
