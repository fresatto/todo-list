import React from 'react';

import AppProvider from './components/AppProvider';

import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <AppProvider />
    </>
  );
};

export default App;
