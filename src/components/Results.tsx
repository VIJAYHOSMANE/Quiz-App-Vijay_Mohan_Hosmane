import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useContext } from "react";
import QuizContext from "../Helpers/Contexts";
import { Questions } from "../Helpers/QuetionBank";

function Results() {
  const { score, setScore, setGameState, clicked, setClicked } =
    useContext(QuizContext);
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        label: "# of Votes",
        data: [score, Questions.length - score],
        backgroundColor: ["rgba(0, 230, 64)", "rgba(230, 11, 11)"],
        borderColor: ["rgba(0, 230, 64)", "rgba(230, 11, 11)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="results">
      <h3>
        Total Score:{score} / {Questions.length}
      </h3>
      <h3>
        Correct Ans:{score} / {Questions.length}
      </h3>
      <h3>
        Incorrect Ans:{Questions.length - score} / {Questions.length}
      </h3>
      <Pie data={data} />
    </div>
  );
}

export default Results;
