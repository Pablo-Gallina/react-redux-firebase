import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import AppRouter from './routers/AppRouter';

import './sass/index.scss';

function App() {
  return (
    // Como un context
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
