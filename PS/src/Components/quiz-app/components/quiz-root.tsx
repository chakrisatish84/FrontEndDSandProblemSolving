import React, { useState } from "react";
import { questions } from "../constants/questions.json";
import { QuestionForm } from "./QuestionForm";
import { ResultForm } from "./ResultForm";

const QuizRoot: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswers, setselectedAnswers] = useState<number[]>([]);  

  const handelAnswerSubmit = (index: number, selectedAswer: string) => {
    setselectedAnswers((answers) => [
      ...answers,
      questions[index].correct_answer === selectedAswer ? 1 : 0,
    ]);
    setCurrentQuestion((current) => current + 1);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setselectedAnswers([]);
  };
  return (
    <div tabIndex={0} style={{width:'100%'}}>
      <h1 style={{textAlign:"center"}}>World Quiz</h1>
      <div className="questionRoot">
        {currentQuestion !== questions.length ? (
          <QuestionForm
            questionIndex={currentQuestion}
            question={questions[currentQuestion]}
            onAnswerSelect={handelAnswerSubmit}
          />
        ) : (
          <ResultForm questions={questions} submitedAnswers={selectedAnswers} restartQuiz={restartQuiz} />
        )}
      </div>
    </div>
  );
};

export default QuizRoot;
