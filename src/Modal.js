import React from 'react';
import { useGlobalContext } from './context';

const Modal = () => {
  const { questions, correct } = useGlobalContext();
  return (
    <main>
      <div className="modal-container isOpen">
        <div className="modal-content">
          <p>
            You got {(correct / questions.length) * 100}% correct answers of
            questions
          </p>
        </div>
      </div>
    </main>
  );
};

export default Modal;
