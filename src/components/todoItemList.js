import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteTodo} from '../components/actions'
// import MapTodo from './mapTodo'


class todoItemList extends Component {


    deleteFun = (e) => {
        console.log('delete');
        // console.log(this.refs.singleListitem.parentElement.id)
        const value = e.target.parentElement.getAttribute('value');
        const id = e.target.parentElement.getAttribute('id');
        console.log(id)
        this.props.deleteTodo(value,id);
        
    }

   

    mapTodo =(countTodo)=> this.props.todos.map(todo => (
        <div className='singleListItem' key={todo.id} value={todo.title} id={todo.id} >
            <p>{todo.title}</p>
            <button className='addBtn deleteBtn' onClick={this.deleteFun} >delete</button>
            
        </div>
    ))
    

    render() {
        let countTodo = 0;
        console.log('hello')
        console.log(this.props.todos)
        return (
            <div>
                <div className='mapTodo'>  
                    {this.mapTodo(countTodo)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state =>({
    todos: state.todoList.todo
})


const mapDispatchToProps = {
    deleteTodo,
  
    
}


export default connect(mapStateToProps,mapDispatchToProps)(todoItemList)