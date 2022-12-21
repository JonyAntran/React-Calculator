import "./App.css";
import { useEffect, useState } from "react";
const App = () => {
  const [inputNum, setInputNum] = useState(0);
  const [caclculateNum, setCalculateNum] = useState(0);
  const [operator, setOperator] = useState("");
  const [monitor, setMonitor] = useState("");

  useEffect(() => {
    setMonitor(inputNum);
  }, [inputNum]);
  useEffect(() => {
    setMonitor(caclculateNum);
  }, [caclculateNum]);
  const ClickInputNum = (e) => {
    let input = e.target.value;
    if (inputNum === 0) {
      setInputNum(input);
    } else {
      setInputNum(inputNum + input);
    }
  };
  const ClickInputNums = (e) => {
    let input = e.target.value;
    if (inputNum >= 1) {
      setInputNum(inputNum + input);
    } else {
      setInputNum(0 + input);
    }
  };
  const changeHandler = () => {
    if (parseFloat(inputNum) > 0) {
      setInputNum(-parseFloat(inputNum));
    } else {
      setInputNum(Math.abs(parseFloat(inputNum)));
    }
    if (parseFloat(monitor) > 0) {
      setMonitor(-parseFloat(monitor));
    } else {
      setMonitor(Math.abs(parseFloat(monitor)));
    }
  };
  const porcentage = () => {
    setInputNum(parseFloat(inputNum) / 100);

    setMonitor(parseFloat(monitor) / 100);
  };
  const TakeOperator = (operator) => {
    setOperator(operator);
    calculate();

    setInputNum(0);
  };
  const calculate = () => {
    switch (operator) {
      case "+":
        setCalculateNum(parseFloat(caclculateNum) + parseFloat(inputNum));
        break;
      case "-":
        setCalculateNum(parseFloat(caclculateNum) - parseFloat(inputNum));
        break;
      case "*":
        setCalculateNum(parseFloat(caclculateNum) * parseFloat(inputNum));
        break;
      case "/":
        if (parseFloat(inputNum) === 0) {
          setCalculateNum(0);
          setInputNum(0);
        } else {
          setCalculateNum(parseFloat(caclculateNum) / parseFloat(inputNum));
        }

        break;
      default:
    }

    if (operator === "") {
      setCalculateNum(inputNum);
    } else {
      setInputNum(0);
    }
    return;
  };
  const Equals = () => {
    calculate();
    setOperator(monitor);
  };
  const Delet = () => {
    setInputNum(0);
    setCalculateNum(0);
    setMonitor(0);
    setOperator("");
  };

  return (
    <div className="container">
      <section className="screen">
        <div className="out-put">{monitor}</div>
      </section>
      <section className="calculator">
        <div className="keyboard">
          <button
            onClick={() => {
              Delet();
            }}
            className="btn gray"
          >
            AC
          </button>
          <button
            onClick={() => {
              changeHandler();
            }}
            className="btn gray"
          >
            +/-
          </button>
          <button
            onClick={() => {
              porcentage();
            }}
            className="btn gray"
          >
            %
          </button>
          <button
            onClick={() => {
              TakeOperator("/");
            }}
            className="btn orange"
          >
            ÷
          </button>
        </div>
        <div className="keyboard">
          <button onClick={ClickInputNum} value={7} className="btn gray">
            7
          </button>
          <button onClick={ClickInputNum} value={8} className="btn gray">
            8
          </button>
          <button onClick={ClickInputNum} value={9} className="btn gray">
            9
          </button>
          <button
            onClick={() => {
              TakeOperator("*");
            }}
            className="btn orange"
          >
            x
          </button>
        </div>
        <div className="keyboard">
          <button onClick={ClickInputNum} value={4} className="btn gray">
            4
          </button>
          <button onClick={ClickInputNum} value={5} className="btn gray">
            5
          </button>
          <button onClick={ClickInputNum} value={6} className="btn gray">
            6
          </button>
          <button
            onClick={() => {
              TakeOperator("-");
            }}
            className="btn orange"
          >
            -
          </button>
        </div>
        <div className="keyboard">
          <button onClick={ClickInputNum} value={1} className="btn gray">
            1
          </button>
          <button onClick={ClickInputNum} value={2} className="btn gray">
            2
          </button>
          <button onClick={ClickInputNum} value={3} className="btn gray">
            3
          </button>
          <button
            onClick={() => {
              TakeOperator("+");
            }}
            className="btn orange"
          >
            +
          </button>
        </div>
        <div className="keyboard">
          <button onClick={ClickInputNum} value={0} className="btn gray wide">
            0
          </button>
          <button onClick={ClickInputNums} value="." className="btn gray">
            .
          </button>
          <button
            onClick={() => {
              Equals();
            }}
            className="btn orange"
          >
            =
          </button>
        </div>
      </section>
    </div>
  );
};
export default App;
