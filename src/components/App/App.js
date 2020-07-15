import React from 'react';
import StoreProvider from '../../store/StoreProvider';

function App() {
  return (
    <StoreProvider>
      <h1>My Bookshelf</h1>
    </StoreProvider>
  );
}

export default App;
