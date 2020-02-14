import {all,fork,takeEvery,put} from 'redux-saga/effects'

//  watcher saga function to add todo 
function* addTodoWatcher(){
    // console.log('addTodoSagaFunction')
    yield takeEvery('ADD_TODO',addTodoWorker)
}


// worker saga function to add todo 
function* addTodoWorker(todoData){
    // console.log(todoData.data)
    const payload = todoData.data
    yield put({type:'ADD_TODO_REDUCER',payload})
}


// watcher saga function to delete todo item
function*  deleteTodoWatcherFunc(){
    // console.log('deleteSagafunction')
    yield takeEvery('DELETE_TODO',deleteTodoWorkerFunc)
}


// worker saga function to delete todo item
function* deleteTodoWorkerFunc(deleteTodoData){
    // console.log(deleteTodoData)
    const payload = deleteTodoData.id
    yield put({type:'DELETE_TODO_REDUCER',payload})

}


export default function* Saga() {
    yield all([
        fork(addTodoWatcher),
        fork(deleteTodoWatcherFunc),
    ]);
}