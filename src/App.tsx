import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import End from "./components/End";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import QuizContext from "./Helpers/Contexts";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Results from "./components/Results";
function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(0);
  return (
    <div className="app">
      <h1 className="heading">Quiz App</h1>

      <QuizContext.Provider
        value={{
          gameState,
          setGameState,
          score,
          setScore,
          clicked,
          setClicked,
        }}
      >
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/end" element={<End />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </QuizContext.Provider>
    </div>
  );
}

export default App;
