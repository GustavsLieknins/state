import logo from './logo.svg';
import React, { useState } from 'react';
import Style from "./global.css";

function Check(props) {
function handleOnChange(){
  setCount(!count)
}
const [count, setCount] = useState(props.boolean);
  return (
    <>
    <label name={props.name}></label>
    <input name={props.name} type="checkbox" checked={count} onChange={handleOnChange} />
    </>
  );
}

export default Check;
