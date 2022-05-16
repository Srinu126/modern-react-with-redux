import React from 'react';
import { connect } from 'react-redux';
import { add_Todo, delete_Todo } from './redux/actions/actions';
class Todo extends React.Component {
    state={todo:''}
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.add_Todo(this.state.todo)
        this.setState({todo:''})
    }
    render() {
        console.log("inside render", this.props.todos.todos)
        return (
            <div>
                <h1>Todo App</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Enter Todo</label>
                        <input type='text' value={this.state.todo} placeholder='enter todo' onChange={(e) => this.setState({ todo: e.target.value })} />
                    </div>
                </form>
                {this.props.todos.todos.length > 0 && this.props.todos.todos.map((todo) => {
                    return (<div style={{display:"flex", marginTop:"10px"}} key={todo.id}>
                        <li style={{marginRight:"10px"}}>{todo.name}</li>
                        <button  onClick={() => this.props.delete_Todo(todo.id)}>Delete</button>
                    </div>)
                })}
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        todos: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        add_Todo : (todo) => dispatch(add_Todo(todo)),
        delete_Todo : (id) => dispatch(delete_Todo(id))
    }
}

// class Todo extends React.Component {
//     state={todos:[], todo:'', count:0}
//     handleSubmit = (e) => {
//         e.preventDefault();
//         this.setState({count: this.state.count+1})
//         const currTodo = {name:this.state.todo, id:this.state.count}
//         const c_todo = [...this.state.todos, currTodo]
//         this.setState({todos: c_todo, todo:''})
//     }
//     handleDelete = (index) => {
//         const newArr= this.state.todos
//         const filterArr = newArr.filter((todo)=> todo.id!==index)
//         this.setState({todos: filterArr})
//     }
//     render() {
//         return(
//             <div>
//                 <h1>Todo App</h1>
//                 <form onSubmit={this.handleSubmit}>
//                     <div>
//                         <label>Enter Todo</label>
//                         <input type='text' value={this.state.todo} placeholder='enter todo' onChange={(e) => this.setState({todo: e.target.value})} />
//                     </div>
//                 </form>
//                 {this.state.todos && this.state.todos.length > 0 && this.state.todos.map((todo) => {
//                     return (<div key={todo.id}>
//                         <li>{todo.name}</li>
//                         <button onClick={()=>this.handleDelete(todo.id)}>Delete todo</button>
//                     </div>)
//                 })}
//             </div>
//         )
//     }
// }
export default connect(mapStateToProps, mapDispatchToProps)(Todo);