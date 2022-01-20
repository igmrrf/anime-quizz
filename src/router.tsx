import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./views/home/Home";
import News from "./views/news/News";
import Quizz from "./views/quizz/Quizz";

const router = () => {
  return (
    <Router>
      <Navigation />
      {/* A <Routes> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/quizz' element={<Quizz />} />
      </Routes>
    </Router>
  );
};

export default router;
