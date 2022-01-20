import { useState, useEffect } from "react";
import MainContent from "../../components/quizz/MainContent";

interface IState {
  quizzes: {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: Array<string>;
  }[];
}

const Quizz = () => {
  const [quizzList, setQuizzList] = useState<IState["quizzes"]>([]);

  const fetchQuizz = async () => {
    const temp = await fetch(
      `https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=multiple`,
    ).then((res) => res.json());

    setQuizzList(temp.results);
  };

  useEffect(() => {
    fetchQuizz();
  }, []);
  return (
    <div>
      <h1>Quizz</h1>
      <MainContent quizzList={quizzList} />
    </div>
  );
};

export default Quizz;
