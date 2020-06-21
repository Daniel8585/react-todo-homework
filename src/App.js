import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Input from './components/Input';
import Button from './components/Button';
import TodoItem from './components/TodoItem';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      inputValue: '',
      key: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    })
  }
  
  
  
  onSubmit = () => {
    const inputValue = this.state.inputValue;
    if(inputValue === ''){
   return alert('please add text')
    }
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.state.todos.length + 1,
          value: this.state.inputValue,
        }
      ]
    })
  } 





  deleteTodos = (index) => {
    const todos = this.state.todos.filter(item => item.id !== index);
    this.setState({todos:todos});
  }
 

 doneTodos = (index,e) => {
  
 }
 

  render() {
    const todos = this.state
    return (
      <div className="App">
        <Header />      
        <div className='list'>
          <div>
          <Input handleChange={this.handleChange}/>
          <Button value="Add" onClick={this.onSubmit}  />
        </div>
        <div>

        {
            this.state.todos.map((todos,index) => (
              <TodoItem key={todos.id} value={todos.value} id={todos.id} deleteTodos={this.deleteTodos} doneTodos={this.doneTodos}/>
            ))
          }
        </div>
        </div>
       
        <Footer />
      </div>
    );
  }
}

export default App;
