import { useState } from "react";
import "./App.css";
import ButtonArea from "./components/ButtonArea";
import Display from "./components/Display";
import a from "./audio.wav";

const operators = ["+", "-", "/", "*"];
const App = () => {
  const [str, setStr] = useState("");
  const [lastOperator, setLastOperator] = useState("");
  const [isPrank, setIsPrank] = useState(false);
  const [audio] = useState(new Audio(a));

  const handleOnChange = (value) => {
    isPrank && setIsPrank(false);
    if (value === "AC") {
      setStr("");
      return;
    }
    if (value === "C") {
      const arg = str.slice(0, -1);
      setStr(arg);
      return;
    }
    if (value === "=") {
      return onTotal();
    }
    if (operators.includes(value)) {
      setLastOperator(value);
      const lastchar = str.slice(-1);
      if (operators.includes(lastchar)) {
        const strWithoutChar = str.slice(0, -1);
        setStr(strWithoutChar + value);
        return;
      }
    }
    if (value === ".") {
      if (lastOperator) {
        const positionOfLastOperator = str.lastIndexOf(lastOperator);
        const afterLastOperator = str.slice(positionOfLastOperator + 1);
        if (afterLastOperator.includes(".")) {
          return;
        }
      } else if (str.includes(".")) {
        return;
      }
    }

    setStr(str + value);
  };

  const onTotal = () => {
    const prankVal = randomNumber();
    prankVal > 0 && audio.play() && setIsPrank(true);
    const ttle = eval(str) + prankVal;
    setStr(ttle.toString());
  };
  const randomNumber = () => {
    const num = Math.ceil(Math.random() * 10);
    return num > 3 ? 0 : num;
  };
  return (
    <div className="wrapper">
      <div className="circle"></div>
      <div className="calculator">
        <Display str={str} isPrank={isPrank} />
        <div className="btn-area">
          <ButtonArea handleOnChange={handleOnChange} />
        </div>
      </div>
    </div>
  );
};

export default App;
