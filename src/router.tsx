import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Manga from "./Manga";

const router = () => {
  return (
    <Router>
      {/* A <Routes> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/' element={<App />} />
        <Route path='/' element={<App />} />
        <Route path='/' element={<App />} />
        <Route path='/' element={<App />} />
        <Route path='/' element={<App />} />
        <Route path='/' element={<App />} />
        <Route path='/' element={<App />} />
        <Route path='/manga' element={<Manga />} />
      </Routes>
    </Router>
  );
};

export default router;
