import {useState} from 'react';
import useStore from '../Store/store';

function Header () {
  
  const todos = useStore( ( state )=> state.todos );
  
  function filterForComplete( todo ){
    return todo.completed != null;
  }

  return (
    <div>
      <h1>Full Function Full Stack React Todos</h1>
      <p>{ 
      todos.filter( filterForComplete ).length
      }  
      <span> </span>out of { todos.length } complete ( 
      { ( todos.filter( filterForComplete ).length/todos.length * 100 ).toFixed( 2 ) }%)</p>

    </div>
  );

}

export default Header
