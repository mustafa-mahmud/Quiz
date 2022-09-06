import React from 'react';
import { useGlobalContext } from './context';

const Modal = () => {
  const { index, correct } = useGlobalContext();

  return (
    <main>
      <h2>modal content</h2>
    </main>
  );
};

export default Modal;
