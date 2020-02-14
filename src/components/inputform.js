import React,{Component} from 'react'
import {connect} from 'react-redux'
import {addTodo} from './actions'


class inputForm extends Component{

    onSubmit =(e)=>{
        e.preventDefault(); 
        console.log('onsubmit') 
        if(e.target[0].value !== ''){
            const data={
                id:Math.floor((Math.random() * 10000) + 1),
                title:e.target[0].value,
                
            }
            this.props.addTodo(data)
            e.target[0].value=''
        }else{
            alert('Input cannot be empty! please enter something')
        }
        

      }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
            <input 
            className='inputTextBox' 
            placeholder='Enter todo item' 
            onChange={this.onChangeHandler}
            name='title'
            // value={this.state.title}
            />

            <button 
            type='submit'
            className='addBtn' 
            style={{ backgroundColor: '#f4f4f4' }} 
            >
              +add
            </button>
            </form>
        );
    }
}

const mapDispatchToProps = {
    addTodo,
}

export default connect(null,mapDispatchToProps) (inputForm)
// export default inputForm