import React from "react";
import "../App.css";
import { useContext } from "react";
import QuizContext from "../Helpers/Contexts";
import { Questions } from "../Helpers/QuetionBank";
import { Link } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
function End() {
  const { score, setScore, setGameState, clicked, setClicked } =
    useContext(QuizContext);
  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className="endscreen">
      <h1>Quiz Finished</h1>

      <h3>You have succesfully submitted the quiz</h3>
      <Link
        to={{
          pathname: "/results",
        }}
      >
        <button>See your performance</button>
      </Link>
      <Link to="/">
        <button
          style={{ backgroundColor: "#023047", color: "whitesmoke" }}
          onClick={restartQuiz}
        >
          Restart Quiz
        </button>
      </Link>
    </div>
  );
}

export default End;
