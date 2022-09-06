import React from 'react';
import { useGlobalContext } from './context';

const Quiz = () => {
  const { questions, index, correct, nextQuestion, handleCorrectAnswers } =
    useGlobalContext();

  return (
    <section className="quiz">
      <p className="correct-answers">
        correct answers {correct}/{index}
      </p>
      <article className="container">
        <h2 dangerouslySetInnerHTML={{ __html: questions[index].question }} />
        <div className="btn-container">
          {questions[index].allAnswers.map((answer, ind) => {
            return (
              <button
                onClick={() =>
                  handleCorrectAnswers(questions[index].correctAns === answer)
                }
                className="answer-btn"
                key={ind}
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            );
          })}
        </div>
      </article>
      <button className="next-question" onClick={nextQuestion}>
        next question
      </button>
    </section>
  );
};

export default Quiz;
