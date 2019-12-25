import React from "react";
import Navbar from "./components/layout/Navbar";
import Quiz from "./components/quiz/Quiz";

import "./css/App.css";
import "./css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Quiz />
    </div>
  );
}

export default App;
