import logo from './logo.svg';
import Style from "./global.css";
import Counter from './Counter.js';
import Name from './Hellow.js';

function App() {
  const names = ["Juris", "Markus", "Aldis"];
  const nameri = names.map((name, i) => {
    return <Name value={name} valuee={name}/>
  })
  return (
    <>
      {nameri}
    </>
  );
}

export default App;
