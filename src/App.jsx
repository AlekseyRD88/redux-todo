import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import TodoList from './tasks/components/TodoList.jsx';
const App = () => {
  return(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

export default App;