import {ADD_TODO, DELETE_TODO} from './action_types'

export const add_Todo = (todo) => {
    console.log("inside actions", todo)
    return {
        type: ADD_TODO,
        payload: todo
    }
}
export const delete_Todo = (id) => {
    console.log("inside deletetodo action", id)
    return {
        type: DELETE_TODO,
        payload: id
    }
}