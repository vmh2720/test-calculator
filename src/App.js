import { useState } from 'react';

function App() {
  const [calcu, setCalcu] = useState("");
  const [result, setResult] = useState("");

  const opser = ['+', '-', '*', '/', '.'];

  const updateCalcu = value => {
    // eslint-disable-next-line no-mixed-operators
    if (opser.includes(value) && calcu === '' || opser.includes(value) && opser.includes(calcu.slice(-1))
    ) {
      return;
    }

    setCalcu(calcu + value);

    if (!opser.includes(value)) {
      // eslint-disable-next-line no-eval
      setResult(eval(calcu + value).toString());
    }
  }

  const createDigits = () => {
    const digits = [];
    for (let i=1; i<10; i++) {
      digits.push(
        <button onClick={() => updateCalcu(i.toString())} key={i}>{i}</button>
      )
    }
    return digits;
  }

  const calculate = () => {
    // eslint-disable-next-line no-eval
    setCalcu(eval(calcu).toString());
  }

  const deleteAll = () => {
    setCalcu("");
  }

  const deleteLast = () => {
    // eslint-disable-next-line eqeqeq
    if (calcu == '') {
      return;
    }

    const value = calcu.slice(0, -1);
    setCalcu(value);
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ''}&nbsp;
          { calcu || "0"}
        </div>

        <div className="operators">
          <button onClick={() => updateCalcu('+')}>+</button>
          <button onClick={() => updateCalcu('-')}>-</button>
          <button onClick={() => updateCalcu('*')}>*</button>
          <button onClick={() => updateCalcu('/')}>/</button>
          <button onClick={deleteLast}>DEL</button>
          <button onClick={deleteAll}>CLEAR</button>
        </div>

        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalcu('0')}>0</button>
          <button onClick={() => updateCalcu('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
