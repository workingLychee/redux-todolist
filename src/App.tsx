import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import rootReducer from './reducers/index';
import './App.css';
import Form from './formik/form';
// import TodoList from './components/todoList/todoList-class';
// import { store } from './store/index';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());

//在chrome使用redux需要的一些配置

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        {/* //     <TodoList /> */}
        <Form />
      </div>
    </Provider>
  );
};

export default App;
