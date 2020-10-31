import React from 'react';

import TodoProvider from '../../context/TodosContext';
import Layout from '../Layout';

const AppProvider: React.FC = () => {
  return (
    <TodoProvider>
      <Layout />
    </TodoProvider>
  );
};

export default AppProvider;
