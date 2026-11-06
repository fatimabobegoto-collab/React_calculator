import "./index.css";
import { useState } from "react";
export default function App() {
  const [inputs, setInput] = useState(0);
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  //handling numbers
  function handleDigit(e) {
    const digit = e.target.textContent;

    setInput((prev) => {
      return prev === 0 ? digit : String(prev) + digit;
    });
  }

  // mathematical operators
  function handleOperator(op) {
    setFirstOperand(Number(inputs));
    setOperator(op);
    setInput(0);
  }

  //for equal
  function equal() {
    let result;

    switch (operator) {
      case "+":
        result = result = firstOperand + Number(inputs);
        break;

      case "-":
        result = result = firstOperand - Number(inputs);
        break;

      case "*":
        result = result = firstOperand * Number(inputs);
        break;

      case "/":
        result = result = firstOperand / Number(inputs);
        break;

      case "%":
        result = result = firstOperand % Number(inputs);
        break;

      default:
        return;
    }

    setInput(result);
  }

  //decimal operations
  // function handleDecimal(){
  //  return  String(inputs).includes('.') ? String(inputs): String(inputs) + '.';
  // }

  function handleDecimal() {
    if (String(inputs).includes(".")) return;

    setInput(String(inputs) + ".");
  }

  function handleSignChange() {
    setInput(Number(inputs) * -1);
  }
  // For resetting
  // function resetting() {
  //   setInput(0);
  // }

  function resetting() {
    setInput(0);
    setFirstOperand(null);
    setOperator(null);
  }

  return (
    <div className="calc">
      <input type="text" className="result" readOnly value={inputs} />
      <button className="btn" onClick={resetting}>
        AC
      </button>
      <button className="btn" onClick={handleSignChange}>
        +/-
      </button>
      <button className="btn" onClick={() => handleOperator("%")}>
        %
      </button>
      <button className="operator" onClick={() => handleOperator("/")}>
        ÷
      </button>
      <button className="btn" onClick={handleDigit}>
        7
      </button>
      <button className="btn" onClick={handleDigit}>
        8
      </button>
      <button className="btn" onClick={handleDigit}>
        9
      </button>
      <button className="operator" onClick={() => handleOperator("*")}>
        x
      </button>
      <button className="btn" onClick={handleDigit}>
        4
      </button>
      <button className="btn" onClick={handleDigit}>
        5
      </button>
      <button className="btn" onClick={handleDigit}>
        6
      </button>
      <button className="operator" onClick={() => handleOperator("-")}>
        -
      </button>
      <button className="btn" onClick={handleDigit}>
        1
      </button>
      <button className="btn" onClick={handleDigit}>
        2
      </button>
      <button className="btn" onClick={handleDigit}>
        3
      </button>
      <button className="operator" onClick={() => handleOperator("+")}>
        +
      </button>
      <button className="zero" onClick={handleDigit}>
        0
      </button>
      <button className="btn" onClick={handleDecimal}>
        .
      </button>
      <button className="operator" onClick={equal}>
        =
      </button>
    </div>
  );
}
