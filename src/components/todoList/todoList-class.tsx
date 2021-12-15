import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, changeInput, finishTodo, deleteTodo } from '../../actions/todoAction';
import Todo from '../todo';
import SignupForm from '../signupForm';
import './todoList.scss';

interface TodoProps {
  onClick: (input: any) => void;
  onInput: (input: any) => void;
  onDelete: (input: any) => void;
  onFinish: (input: any) => void;
  todos: any;
  input: any;
}

interface TodoState {}

export class TodoList extends Component<TodoProps, TodoState> {
  render() {
    let { onClick, onInput, onDelete, onFinish, todos, input } = this.props;
    return (
      <div className='todoList'>
        <div className='input'>
          <input
            type='text'
            placeholder='请输入待办事项'
            value={input.title}
            onChange={(e: any) => {
              onInput(e.target.value);
            }}
          />
          <button onClick={() => onClick(input)}>ADD</button>
        </div>
        {/* <SignupForm onClick={onClick} onInput={onInput} input={input}/> */}
        {todos.map((todo: any) => (
          <Todo key={todo.no} todo={todo} onDelete={onDelete} onFinish={onFinish} />
        ))}
      </div>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
