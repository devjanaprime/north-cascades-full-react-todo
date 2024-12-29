import { create } from "zustand";
import axios from 'axios';

const useStore = create( ( set )=>({
    todos: [],
    getTodos: ()=>{
        axios.get( '/api/todo' ).then( function( response ){
            console.log( 'back from GET:', response.data );
            set( ( state )=>( { todos: response.data } ) );
        }).catch( function( err ){  
            console.log( err );
            alert( 'error getting todos from server' );
        })
    }
}))

export default useStore;