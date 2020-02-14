import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import InputForm from './components/inputform'
// import logo from './logo.svg';
import './App.css';
import TodoItemList from './components/todoItemList'


class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <div className="App">
          <div className='mainAppDiv'>
            <h1 style={{ color: 'black' }}>Todo</h1>
            
            <InputForm/>

            <h2>List</h2>

            <TodoItemList/>
          </div>
      </div>
      </Provider>
    );
  }
}

export default App;
