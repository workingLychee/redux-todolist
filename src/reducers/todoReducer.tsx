import { ADD_TODO, DELETE_TODO, FINISH_TODO, CHANGE_TODO } from '../constants/action-type';

export interface Todo {
  no: number;
  title: string;
  done: boolean;
}
interface State {
  todos: Todo[];
  input: {
    title: string;
  };
}

const initialState: State = {
  todos: [
    {
      no: 0,
      title: 'learn redux',
      done: false,
    },
  ],
  input: { title: '' },
};

// 限制payload类型
const todoReducer = (state = initialState, action: { type: string; payload: object }) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO: {
      let newTodos = state.todos;
      const length = newTodos.length;
      newTodos.push({
        ...(payload as { todo: Todo }).todo,
        no: length,
        // 结构以后后面的值要覆盖前面的
      });
      return {
        ...state,
        todos: newTodos,
      };
    }
    case FINISH_TODO: {
      const toggleTodo = state.todos.find((todo) => {
        return todo.no === (payload as { index: number }).index;
      });
      const cloneTodos = state.todos;
      if (toggleTodo) {
        cloneTodos[toggleTodo.no].done = !cloneTodos[toggleTodo.no].done;
      }
      return {
        ...state,
        todos: cloneTodos,
      };
    }
    case DELETE_TODO: {
      const toggleTodo = state.todos.find((todo) => {
        return todo.no === (payload as { index: number }).index;
      });
      const cloneTodos = state.todos;
      if (toggleTodo) {
        cloneTodos.splice(toggleTodo.no, 1);
      }
      for (let i = 0; i < cloneTodos.length; i++) {
        cloneTodos[i].no = i;
      }
      return {
        ...state,
        todos: cloneTodos,
      };
    }
    case CHANGE_TODO: {
      return {
        ...state,
        input: {
          title: (payload as { input: string }).input,
        },
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
