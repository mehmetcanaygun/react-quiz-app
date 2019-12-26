import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Quiz from "./components/quiz/Quiz";
import Result from "./components/pages/Result";
import NotFound from "./components/pages/NotFound";
import Footer from "./components/layout/Footer";
import QuizState from "./context/QuizState";

import "./css/App.css";

function App() {
  return (
    <QuizState>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/quiz/:category" component={Quiz} />
            <Route exact path="/result" component={Result} />
            <Route component={Home} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </QuizState>
  );
}

export default App;
