import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import AuthRouter from './routers/AuthRouter';

function App() {
  return (
    // Como un context
    <Provider store={store}>
      <AuthRouter />
    </Provider>
  );
}

export default App;
