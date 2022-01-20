import { useEffect, useState } from "react";

type IProps = {
  quizz: {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: Array<string>;
  };
  position: number;
  result: Array<string>;
  setResult: (text: string[]) => void;
};

interface IState {
  options: Array<string>;
}

const QuizzCard = ({ quizz, result, setResult, position }: IProps) => {
  const [options, setOptions] = useState<IState["options"]>([]);
  const [checked, setChecked] = useState<string>("");

  useEffect(() => {
    quizz.incorrect_answers[3] = quizz.correct_answer;
    function shuffle(newAnwsers: Array<string>) {
      let currentIndex = newAnwsers.length,
        randomIndex;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [newAnwsers[currentIndex], newAnwsers[randomIndex]] = [newAnwsers[randomIndex], newAnwsers[currentIndex]];
      }
      return newAnwsers;
    }

    shuffle(quizz.incorrect_answers);
    setOptions(quizz.incorrect_answers);
  }, [quizz]);

  const handleAnswer = (option: string) => {
    setChecked(option);
    if (option === quizz.correct_answer) {
      setResult([...result, option]);
      console.log(result);
    }
    if (position === 9) {
      alert(`${result.length}`);
    }
  };
  return (
    <article>
      <p>{quizz.question.replace(/&quot;/g, '"')}</p>
      <section>
        {options.map((option, index) => (
          <div key={`${option}${index}`}>
            <input
              type='checkbox'
              onChange={(e) => handleAnswer(option)}
              id={option}
              name='vehicle1'
              value='Bike'
              checked={checked === option}
            />
            <label htmlFor={option}> {option.replace(/&quot;/g, '"')}</label>
            <br />
          </div>
        ))}
      </section>
    </article>
  );
};

export default QuizzCard;
