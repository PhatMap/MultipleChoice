import React from "react";
import "./styles.css";

const Answer = (props) => {
  return (
    <div className="answer">
      <div className="container-answer">
        <label className="label">{props.label}</label>
        <div className="answer-container">
          <label>A</label>
          <input type="radio" name={props.label}></input>
        </div>
        <div className="answer-container">
          <label>B</label>
          <input type="radio" name={props.label}></input>
        </div>
        <div className="answer-container">
          <label>C</label>
          <input type="radio" name={props.label}></input>
        </div>
        <div className="answer-container">
          <label>D</label>
          <input type="radio" name={props.label}></input>
        </div>
      </div>
    </div>
  );
};
export default Answer;
