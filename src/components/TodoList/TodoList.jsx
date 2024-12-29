import {useState} from 'react';
import useStore from '../Store/store';
import TodoItem from '../TodoItem/TodoItem';

function TodoList () {
  const todos = useStore( ( state )=> state.todos );

  return (
    <div>
      <h1>TodoList</h1>
      {
        todos.map( ( todo, index )=>(
          <TodoItem key={ index } todo={ todo } />
        ))
      }
    </div>
  );

}

export default TodoList
