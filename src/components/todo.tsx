import React from 'react';
// import './todo.scss';
import styled from 'styled-components';

interface props {
  todo: { no: number; title: string; done: boolean };
  onDelete: (index: number) => void;
  onFinish: (index: number) => void;
}

const Todo = ({ todo, onDelete, onFinish }: props) => {
  return (
    <Wrapper>
      <div className={todo.done ? 'todo done' : 'todo'}>
        <div className='block no'>{`NO. ${todo.no}`}</div>
        <div className='block checkbox'>
          <input type='checkbox' defaultChecked={todo.done} onChange={() => onFinish(todo.no)} />
        </div>
        <div className='block title'>{todo.title}</div>
        <div className='block delete'>
          <div onClick={() => onDelete(todo.no)}>DELETE</div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .todo {
    width: 400px;
    height: 50px;
    box-sizing: border-box;
    border: 1px #222222 solid;
    border-radius: 5px;
    margin: 5px 0;

    &.done {
      background-color: lightblue;
    }

    .block {
      display: flex;
      align-items: center;
      justify-content: center;
      float: left;
      height: 100%;

      &.no {
        width: 20%;
      }

      &.checkbox {
        margin: 0;
        width: 10%;
      }

      &.title {
        width: 40%;
      }

      &.delete {
        width: 30%;
        > div {
          box-sizing: border-box;
          border-radius: 5px;
          background: pink;
          padding: 5px;
        }
      }
    }
  }
`;

export default Todo;
