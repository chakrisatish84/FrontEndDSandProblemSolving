type QuestionFromTypes = {
  question: Question;
  questionIndex: number;
  onAnswerSelect: (index: number, selectedAswer: string) => void;
};

export const QuestionForm = ({
  question,
  questionIndex,
  onAnswerSelect,
}: QuestionFromTypes) => {
  const {question: questionText, options} = question
  return (
    <div>
      <h3 style={{textAlign:"center", fontSize:'xx-large'}}>{questionText}</h3>
      <ul className="optionsStyles">
        {options?.map((option: string, index: number) => {
          return (
            <li className="optionListStyles" key={index}>
              <button className="optionListButtonStyles" onClick={() => onAnswerSelect(questionIndex, option)}>                
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
