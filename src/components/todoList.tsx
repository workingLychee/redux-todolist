import React from 'react';
import Todo from './todo';
import { addTodo, changeInput, finishTodo, deleteTodo } from '../actions/todoAction';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => ({
  todos: [...state.todoReducer.todos],
  input: state.todoReducer.input,
});

const mapDispatchToProps = (dispatch: any) => ({
  onClick: (input: any) => {
    dispatch(
      addTodo({
        title: input.title,
        done: false,
      })
    );
  },
  onDelete: (index: number) => {
    dispatch(deleteTodo(index));
  },
  onInput: (value: string) => {
    dispatch(changeInput(value));
  },
  onFinish: (index: number) => {
    dispatch(finishTodo(index));
  },
});

interface props {
  onClick: (input: any) => void;
  onInput: (input: any) => void;
  onDelete: (input: any) => void;
  onFinish: (input: any) => void;
  todos: any;
  input: any;
}

const TodoList = ({ onClick, onInput, onDelete, onFinish, todos, input }: props) => {
  return (
    <div>
      {/* <div>
        <input
          type='text'
          placeholder='请输入代办事项'
          value={input.title}
          onChange={(e: any) => {
            onInput(e.target.value);
          }}
        />
        <button onClick={() => onClick(input)}>ADD</button>
      </div> */}
      {todos.map((todo: any) => (
        <Todo key={todo.no} todo={todo} onDelete={onDelete} onFinish={onFinish} />
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
