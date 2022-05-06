import React from "react";
import { useState } from "react";
import { Container, Current, Previous, Screen, Button } from "./Styled";

function Calculator() {
  const [current, setCurrent] = useState("");
  const [previous, setPrevious] = useState("");
  const [operation, setOperation] = useState("");

  const clearAllHandler = () => {
    setCurrent("");
    setOperation("");
    setPrevious("");
  };

  const valueHandler = (e) => {
    const value = e.target.getAttribute("data");
    if (value === "." && current.includes(".")) return;
    setCurrent(current + value);
  };

  const deleteHandler = () => {
    const result = current.slice(0, -1);
    setCurrent(result);
  };

  const operationHandler = (e) => {
    if (current === "") return;
    if (previous !== "") {
      let val = compute();
      setPrevious(val);
    } else {
      setPrevious(current);
    }
    setCurrent("");
    setOperation(e.target.getAttribute("data"));
  };

  const equalHandler = () => {
    let val = compute();
    if (val === undefined || val === null) return;
    setCurrent(val);
    setOperation("");
    setPrevious("");
  };

  const compute = () => {
    let result;
    let currentNumber = parseFloat(current);
    let previousNumber = parseFloat(previous);
    if (isNaN(currentNumber) || isNaN(previousNumber)) return;

    switch (operation) {
      case "÷":
        result = previousNumber / currentNumber;
        break;
      case "×":
        result = previousNumber * currentNumber;
        break;
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
      default:
        return;
    }
    return result;
  };

  return (
    <Container>
      <Screen>
        <Previous>
          {previous} {operation}
        </Previous>
        <Current>{current}</Current>
      </Screen>
      <Button onClick={clearAllHandler} gridSpan={2}>
        AC
      </Button>
      <Button onClick={deleteHandler} control>
        DEL
      </Button>
      <Button data={"÷"} onClick={operationHandler} operation>
        ÷
      </Button>
      <Button data={"7"} onClick={valueHandler}>
        7
      </Button>
      <Button data={"8"} onClick={valueHandler}>
        8
      </Button>
      <Button data={"9"} onClick={valueHandler}>
        9
      </Button>
      <Button data={"×"} onClick={operationHandler} operation>
        ×
      </Button>
      <Button data={"4"} onClick={valueHandler}>
        4
      </Button>
      <Button data={"5"} onClick={valueHandler}>
        5
      </Button>
      <Button data={"6"} onClick={valueHandler}>
        6
      </Button>
      <Button data={"+"} onClick={operationHandler} operation>
        +
      </Button>
      <Button data={"1"} onClick={valueHandler}>
        1
      </Button>
      <Button data={"2"} onClick={valueHandler}>
        2
      </Button>
      <Button data={"3"} onClick={valueHandler}>
        3
      </Button>
      <Button data={"-"} onClick={operationHandler} operation>
        -
      </Button>
      <Button period data={"."} onClick={valueHandler}>
        .
      </Button>
      <Button data={"0"} onClick={valueHandler}>
        0
      </Button>
      <Button data={"="} onClick={equalHandler} equals={2}>
        =
      </Button>
    </Container>
  );
}

export default Calculator;
