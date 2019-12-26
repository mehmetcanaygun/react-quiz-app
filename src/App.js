import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Quiz from "./components/quiz/Quiz";
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
            <Route exact path="/" component={Home} />
            <Route exact path="/quiz/:category" component={Quiz} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </QuizState>
  );
}

export default App;
