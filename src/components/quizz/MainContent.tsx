import { useState } from "react";
import QuizzCard from "./QuizzCard";

type IProps = {
  quizzList: {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: Array<string>;
  }[];
};

const MainContent = ({ quizzList }: IProps) => {
  const [result, setResult] = useState<Array<string>>([]);
  return (
    <main>
      <div className='quizz-list'>
        {quizzList.map((quizz, index) => (
          <QuizzCard quizz={quizz} position={index} result={result} setResult={setResult} key={index} />
        ))}
      </div>
    </main>
  );
};

export default MainContent;
