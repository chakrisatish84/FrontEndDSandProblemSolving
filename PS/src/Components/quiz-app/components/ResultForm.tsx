type ResultFormProps = {
  submitedAnswers: number[];
  questions: Question[];
  restartQuiz: () => void;
};

export const ResultForm = ({
  submitedAnswers,
  questions,
  restartQuiz,
}: ResultFormProps) => {
  const correctedAnswers = submitedAnswers.filter(
    (answer: number) => answer === 1
  ).length;
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Results</h2>
      <div className="resultContenStyles">
        {`You answered ${correctedAnswers} out of ${questions?.length} questions`}
        <button onClick={() => restartQuiz()} className="retryButtonStyles">
          Click here to Retry
        </button>
        <div className="questionsResultStyles">
          {questions?.map((question: any, index: number) => {
            return (
              <div
                style={{
                  color: submitedAnswers[index] === 1 ? "green" : "red",
                }}
              >
                <span>{`${index + 1}) ${question.question}`}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
