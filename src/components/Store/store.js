import { create } from "zustand";

const useStore = create( ( set )=>({
    todos: [],
    setTodos: ( newTodos )=>{
        set( (state)=> ( { todos: newTodos } ) )
    }
}))

export default useStore;