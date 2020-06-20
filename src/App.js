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
  
  

  render() {
    return (
      <div className="App">
        <Header />      
        <div className='list'>
          <div>
          <Input handleChange={this.handleChange}  />
          <Button className='sub' value="Add" onClick={this.onSubmit} />
        </div>
        <div>
          {
            this.state.todos.map((item) => (
              <TodoItem key={item.id} value={item.value} />
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
