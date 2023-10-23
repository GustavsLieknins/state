import logo from './logo.svg';
import Style from "./global.css";
import Counter from './Counter.js';
import Name from './Hellow.js';
import LabaledCheck from './LabaledCheck.js';

function App() {
  const names = ["Juris", "Markus", "Aldis"];
  const ratios = [7, 43, 101];
  const labelsAndChecks = {[
    true,
    false
  ],[
    "Agree to the Policy",
    "Receive Offers"
  ]}

  labelsAndBoooleans = [{label: “Agree to the Policy”, check: true}, {label: “Receive Offers”, check: false}]
  const nameri = names.map((name, i) => {
    return <Name value={name} valuee={name}/>
  })
  const ratioeri = ratios.map((ratio, i) => {
    return <Counter ratio={ratio} />
  })

  return (
    <>
      {nameri}
      {ratioeri}
      <br></br>
      {checkboxi}
    </>
  );
}

export default App;
