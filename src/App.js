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

  deleteTodos = (index,e) => {
    const todos = Object.assign([],this.state.todos);
    todos.splice(index,1);
    this.setState({todos:todos});
  }
 
  render() {
    const todos = this.state
    return (
      <div className="App">
        <Header />      
        <div className='list'>
          <div>
          <Input handleChange={this.handleChange}  />
          <Button value="Add" onClick={this.onSubmit} />
          <Button value="delet" onClick={this.deleteTodos} />
        </div>
        <div>

        {
            this.state.todos.map((todos,index) => (
              <TodoItem key={todos.id} value={todos.value} />
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
