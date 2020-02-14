import {DELETE_TODO_REDUCER,ADD_TODO_REDUCER} from './constants'
import { combineReducers } from 'redux'

const initialState ={
    todo:[],
} 

 const reducers = (state=initialState,action)=>{
    
    switch(action.type){
        
        case ADD_TODO_REDUCER:
            console.log(action)
            return{
                ...state,
                todo:state.todo.concat(action.payload),
            }


        
        case DELETE_TODO_REDUCER:
            console.log(action.payload)
            // const value = action.value;
            const id = parseInt(action.payload);
            // console.log(parseInt(action.id))

            // console.log(state.todo.filter(todo => todo.title !== `"${value}"` ))
            // console.log(state.todo.filter(todo => todo.id !== id ))
            // console.log(state.todo.map(todo => todo.id  ))
            return{
                todo:state.todo.filter(todo => todo.id !== id )
            }



        

        default:
            return state;
    }
},
rootReducer = combineReducers({
    todoList:reducers
});

export default rootReducer;

