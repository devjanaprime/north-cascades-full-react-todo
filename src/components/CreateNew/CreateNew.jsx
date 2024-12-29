import {useState} from 'react';
import axios from 'axios';
import useStore from '../Store/store';

function CreateNew () {
  const [ newTodo, setNewTodo ] = useState( { name:'', priority: 0 } );
  const getTodos = useStore( ( state )=> state.getTodos );

  function createNewTodo(){
    console.log( 'in createNewTodo' );
    axios.post( '/api/todo', newTodo ).then( function( response ){
      console.log( response.data );
      getTodos();
    }).catch( function( err ){
      console.log( err );
      alert( 'error creating new todo' );
    })
  }

  return (
    <div>
      <h1>CreateNew</h1>
      <input type="text" placeholder='name' onChange={ (e)=>{ setNewTodo( {...newTodo, name: e.target.value } ) }}/>
      <select onChange={ (e)=>{ setNewTodo( { ...newTodo, priority: Number( e.target.value ) } ) }}>
        <option value="0">Low</option>
        <option value="1">Med</option>
        <option value="2">High</option>
      </select>
      <button onClick={ createNewTodo }>Create</button>
    </div>
  );

}

export default CreateNew
