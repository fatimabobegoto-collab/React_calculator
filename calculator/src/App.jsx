import "./index.css";
import { useState } from "react";
export default function App() {
  const [inputs, setInput] = useState()
  // for adding
  function increment(){
    
  }

  // for substraction
  function substraction(){

  }

  //for division
  function division(){

  }

  // for multiplication
  function multiplication(){

  }

  //for equal

  function equal(){

  }

  // For resetting
  function resetting(){

  }

  // for modulos
  function modulos(){

  }


  return (
    <div className="calc">
      <input type="text" className="result" />
      <button className="btn" onClick={resetting}>AC</button>
      <button className="btn">+/-</button>
      <button className="btn" onClick={modulos}>%</button>
      <button className="operator" onClick={division}>÷</button>
      <button className="btn">7</button>
      <button className="btn">8</button>
      <button className="btn">9</button>
      <button className="operator" onClick={multiplication}>X</button>
      <button className="btn">4</button>
      <button className="btn">5</button>
      <button className="btn">6</button>
      <button className="operator" onClick={substraction}>-</button>
      <button className="btn">1</button>
      <button className="btn">2</button>
      <button className="btn">3</button>
      <button className="operator" onClick={increment}>+</button>
      <button className="zero">0</button>
      <button className="btn">.</button>
      <button className="operator" onClick={equal}>=</button>
    </div>
  );
}
