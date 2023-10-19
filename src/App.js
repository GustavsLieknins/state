import logo from './logo.svg';
import React, { useState } from 'react';
import Style from "./global.css";

function App() {
  const [count, setCount] = useState(0);

  const [ratioChange, setRatioChange] = useState(1);
  // const thing = count.map((img,i) => {
  //   return <img src={img} key={i}  width="60px" height="160px"/>;
  // });
  // const length = count.length;
  // console.log(length)
  function handleRatioChange(e){
    setRatioChange(e.target.value);
  }
  // function removeLode(){
  //   let thingwithnolast = thing.pop();
  //   const things = count.map(img => {
  //   });
  // }
  //   const removeLode = () => {
  //     const newCount = [...count];
  //     newCount.pop();
  //     setCount(newCount);
  // };
  return (
    <>
    <h1>Gusis OG lode sip count</h1>
    <input type="number" value={ratioChange} onChange={handleRatioChange}/>
    {/* <button  onClick={() => setCount([...count, "./lode2.png"])}>Lode + count</button>
    <button  onClick={removeLode}>Lode - count</button> */}
    <br></br>
    <br></br>
    {ratioChange}
    </>
  );
}

export default App;

// import React, { useState } from 'react';
// import './global.css'; // Assuming 'global.css' is a CSS file you want to import

// function App() {
//   const [count, setCount] = useState([]); // Use an empty array to store images
//   const thing = count.map((img, index) => (
//     <img key={index} src={img} width="60px" height="160px" alt={`Image ${index}`} />
//   ));

//   const removeLode = () => {
//     if (count.length > 0) {
//       const newCount = [...count];
//       newCount.pop();
//       setCount(newCount);
//     }
//   };

//   return (
//     <>
//       <h1>Gusis OG lode sip count</h1>
//       <button onClick={() => setCount([...count, './lode2.png'])}>Lode + count</button>
//       <button onClick={removeLode}>Lode - count</button>
//       <br />
//       <br />
//       {thing}
//     </>
//   );
// }

// export default App;