import React from 'react';
import { useGlobalContext } from './context';

import SetupForm from './SetupForm';
import Loading from './Loading';
import Modal from './Modal';
import Quiz from './Quiz';

function App() {
  const { isLoadingForm, loading, isModalOpen } = useGlobalContext();

  if (isLoadingForm) return <SetupForm />;
  if (loading) return <Loading />;
  if (isModalOpen) return <Modal />;

  return <Quiz />;
}

export default App;
