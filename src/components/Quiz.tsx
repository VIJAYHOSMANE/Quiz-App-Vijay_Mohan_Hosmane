import { Button, Radio, RadioGroup } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import React, { useState } from "react";
import { Questions } from "../Helpers/QuetionBank";
import FormControl from "@mui/material/FormControl";
import { useContext } from "react";
import QuizContext from "../Helpers/Contexts";
import End from "./End";
import "../App.css";
import { Link } from "react-router-dom";
import { color } from "@mui/system";

function Quiz() {
  const { score, setScore, setGameState, clicked, setClicked } =
    useContext(QuizContext);
  const [curQuestion, setCurQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState(0);
  const [selected, setSelected] = useState(0);

  const nextQuestion = (event: any) => {
    if (Questions[curQuestion].answer === optionChosen) {
      setScore(score + 1);
    }

    setCurQuestion(curQuestion + 1);
    setSelected(0);
  };

  const handleSelect = (i: any) => {
    console.log(i);

    if (selected === i && selected === Questions[curQuestion].answer)
      return "select";
    else if (selected === i && selected !== Questions[curQuestion].answer)
      return "wrong";
    else if (i === Questions[curQuestion].answer) return "select";
  };

  const finishQuiz = () => {
    if (Questions[curQuestion].answer === optionChosen) {
      setScore(score + 1);
    }

    setGameState("end");
  };

  function onButtonClick(idx: any, que: any) {
    setOptionChosen(idx);
    setSelected(idx);
  }

  return (
    <div className="quiz">
      <h1>
        {Questions[curQuestion].id} / {Questions.length}
      </h1>
      <h1>{Questions[curQuestion].prompt}</h1>
      <div className="options">
        {Questions[curQuestion].options.map((que, idx) => {
          return (
            <button
              className={` ${selected && handleSelect(idx)}`}
              key={idx}
              onClick={() => onButtonClick(idx, que)}
            >
              {que}
            </button>
          );
        })}
      </div>

      {curQuestion == Questions.length - 1 ? (
        <Link to="/end">
          <button
            style={{ backgroundColor: "#023047", color: "whitesmoke" }}
            onClick={finishQuiz}
          >
            Finish
          </button>
        </Link>
      ) : (
        <button
          style={{ backgroundColor: "#023047", color: "whitesmoke" }}
          onClick={nextQuestion}
        >
          Next
        </button>
      )}
    </div>
  );
}

export default Quiz;
