import React from 'react';

import Layout from './components/Layout';
import GlobalStyles from './styles/global';

import TodoProvider from './context/TodosContext';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <TodoProvider>
        <Layout />
      </TodoProvider>
    </>
  );
};

export default App;
