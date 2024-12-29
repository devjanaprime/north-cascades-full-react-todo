import { useEffect, useState } from 'react';

import CreateNew from '../CreateNew/CreateNew';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';

import useStore from '../Store/store';
import axios from 'axios';

function App () {
  
  useEffect( ()=>{
    getTodos();
  }, [])

  const getTodos = useStore( ( state )=> state.getTodos );

  return (
    <div>
      <Header />
      <CreateNew />
      <TodoList />
    </div>
  );

}

export default App
