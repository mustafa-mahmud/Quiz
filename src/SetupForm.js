import React from 'react';
import { useGlobalContext } from './context';

const SetupForm = () => {
  const { handleSubmit, quiz, setQuiz } = useGlobalContext();

  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="amount">number of questions</label>
            <input
              type="number"
              className="form-input"
              value={quiz.amount}
              min="1"
              name="amount"
              id="amount"
              onChange={(e) => setQuiz({ ...quiz, amount: e.target.value })}
            />
          </div>
          <div className="form-control">
            <label htmlFor="category">category</label>
            <select
              name="category"
              id="cetegory"
              value={quiz.category}
              className="form-input"
              onChange={(e) => setQuiz({ ...quiz, category: e.target.value })}
            >
              <option value="animals">animals</option>
              <option value="history">history</option>
              <option value="science_nature">science & nature</option>
              <option value="general_knowledge">general knowledge</option>
              <option value="film">film</option>
              <option value="geography">geography</option>
              <option value="computer">computer</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="difficulty">difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              value={quiz.difficulty}
              className="form-input"
              onChange={(e) => setQuiz({ ...quiz, difficulty: e.target.value })}
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
          <button type="submit" className="submit-btn">
            start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
