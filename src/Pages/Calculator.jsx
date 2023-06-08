import React from "react";
import Button from "../Components/Button";
import ClearButton from "../Components/ClearButton";
import DeleteButton from "../Components/DeleteButton";
import Input from "../Components/Input";
import * as math from "mathjs";
import { useState } from "react";
import "../Styles/Calculator.css";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const addToInput = (val) => {
    setInput(input + val);
    setResult("");
  };

  const handleEqual = () => {
    try {
      setResult(String(math.evaluate(input)));
      setInput("");
    } catch (error) {
      alert("please enter a valid expression");
      setResult("Error");
    }
  };
  return (
    <div className="centered">
      <div className="calc-wrapper">
        <Input input={result || input} />
        <div className="row">
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={addToInput}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={addToInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={addToInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>.</Button>
          <Button handleClick={addToInput}>0</Button>
          <Button handleClick={handleEqual}>=</Button>
          <Button handleClick={addToInput}>-</Button>
        </div>
        <div className="row">
          <ClearButton
            handleClear={() => {
              setInput("");
              setResult("");
            }}
          >
            Clear
          </ClearButton>
          <DeleteButton
            handleDelete={() => input && setInput(input.slice(0, -1))}
          >
            DEL
          </DeleteButton>
        </div>
      </div>
    </div>
  );
}
