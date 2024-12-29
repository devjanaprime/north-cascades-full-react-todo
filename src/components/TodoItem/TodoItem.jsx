import {useState} from 'react';
import axios from 'axios'
import useStore from '../Store/store';

function TodoItem ( todo ) {
  
  const getTodos = useStore( ( state )=> state.getTodos );

  function completeMe(){
    console.log( 'you complete me:', todo.todo.id );
    axios.put( `/api/todo?id=${todo.todo.id}`).then( function( response ){
      console.log( 'back from PUT:', response.data );
      getTodos();
    }).catch( function( err ){
      console.log( err );
      alert( 'error updating todo' );
    })
  }

  function deleteMe(){
    console.log( 'you deleteMe:', todo.todo.id );
    axios.delete( `/api/todo?id=${todo.todo.id}`).then( function( response ){
      console.log( 'back from PUT:', response.data );
      getTodos();
    }).catch( function( err ){
      console.log( err );
      alert( 'error updating todo' );
    })
  }

  return (
    <div>
      <h1>{ todo.todo.name }: { todo.todo.priority }</h1>
      <p>Created: { todo.todo.created.split( "T06:00:00.000Z" ) } <span> </span>
        {
          todo.todo.completed === null ?
          <button onClick={ completeMe }>Complete Now</button> :
          <>Completed: { todo.todo.completed.split( "T06:00:00.000Z" ) }</>
        }
        <button onClick={ deleteMe }>Delete</button>
      </p>
    </div>
  );

}

export default TodoItem
