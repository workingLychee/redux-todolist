import React from 'react';
import './App.css';
import { store } from './store/index';
import { Provider } from 'react-redux';
import TodoList from './components/todoList-class';
// import SignupForm from './components/formik';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
