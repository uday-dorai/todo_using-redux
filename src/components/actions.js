
export const addTodo = (data) =>{
    return {
        type:'ADD_TODO',
        data
    }
}



export const deleteTodo =(value,id) =>{
    return{
        type:'DELETE_TODO',
        id
    }
}


