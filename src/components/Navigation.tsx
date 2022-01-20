import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/news'>News</Link>
        </li>

        <li>
          <Link to='/quizz'>Quiz</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
