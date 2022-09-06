import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

const table = {
  animals: 27,
  history: 23,
  science_nature: 17,
};

const API_ENDPOINT = 'https://opentdb.com/api.php?';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [isLoadingForm, setIsLoadingForm] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: 'history',
    difficulty: 'easy',
  });

  const fetchQuiz = async (url) => {
    setIsLoadingForm(false);
    setLoading(true);

    const res = await axios(url);

    if (res.data.results.length > 0) {
      const newQuestions = res.data.results.map((res) => {
        const { question, incorrect_answers, correct_answer } = res;
        const answers = [...incorrect_answers, correct_answer];
        return { question, correctAns: correct_answer, allAnswers: answers };
      });

      setQuestions(newQuestions);
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { amount, category, difficulty } = quiz;
    const url = `${API_ENDPOINT}amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple&type=multiple`;

    fetchQuiz(url);
  };

  const nextQuestion = () => {
    setIndex((oldState) => {
      const nextIndex = (oldState += 1);

      if (nextIndex > questions.length - 1) return setIsModalOpen(true);
      return nextIndex;
    });
  };

  const handleCorrectAnswers = (answers) => {
    if (answers) setCorrect((oldState) => (oldState += 1));

    nextQuestion();
  };

  return (
    <AppContext.Provider
      value={{
        isLoadingForm,
        quiz,
        loading,
        questions,
        correct,
        index,
        isModalOpen,
        handleSubmit,
        setQuiz,
        nextQuestion,
        handleCorrectAnswers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
