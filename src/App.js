import React, { useContext } from "react";
import Navbar from "./components/layout/Navbar";
import Categories from "./components/quiz/Categories";
import Quiz from "./components/quiz/Quiz";
import Footer from "./components/layout/Footer";
import QuizState from "./context/QuizState";

import "./css/App.css";

function App() {
  return (
    <QuizState>
      <div className="App">
        <Navbar />
        <Categories />
        <Quiz />
        <Footer />
      </div>
    </QuizState>
  );
}

export default App;
