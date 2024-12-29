import { useEffect, useState } from 'react';

import CreateNew from '../CreateNew/CreateNew';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';

import useStore from '../Store/store';
import axios from 'axios';

function App () {
  
  useEffect( ()=>{
    fetchTodos();
  }, [])

  function fetchTodos(){
    axios.get( '/api/todo' ).then( function( response ){
      setTodos( response.data );
    }).catch( function( err ){
      console.log( err );
      alert( 'error getting todos from server' );
    })
  }

  const todos = useStore( ( state )=> state.todos );
  const setTodos = useStore( ( state )=> state.setTodos );

  return (
    <div>
      <Header />
      <CreateNew />
      <TodoList />
    </div>
  );

}

export default App
