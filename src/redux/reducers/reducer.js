import { ADD_TODO, DELETE_TODO } from '../actions/action_types';


const reducer = (state={todos:[]}, action) => {
    switch(action.type){
        case ADD_TODO :
            const currTodo = {name:action.payload, id:Math.ceil(100*Math.random())}
            const newTodo = { todos: [...state.todos, currTodo] };
            return newTodo;
        case DELETE_TODO :
            console.log("inside the reducer", state.todos)
            const newArr= state.todos
            const filterArr = newArr.filter((todo)=> todo.id!==action.payload)
            console.log("inside the reducer after filter", filterArr)
            return {todos: filterArr};
        default:
            return state;

    }

}

export default reducer;