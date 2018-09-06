import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class App extends Component {
  id = 3
  
  state = {
    input: '',
    todos: [
      {id: 0, text: '테스트#1 item', checked: false},
      {id: 1, text: '테스트#2 item', checked: false},
      {id: 2, text: '테스트#3 item', checked: true}
    ],
    color: '#343a40'
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {
    const {input, todos, color} = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      }),
      color: color
    })
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') this.handleCreate();
  }

  handleToggle = (id) => {
    const {todos} = this.state;
    const index = todos.findIndex(todo => todo.id === id); // 파라미터로 받은 id로 몇번째 아이템인지 찾는다.
    const selected = todos[index];
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    }

    this.setState({
      todos: nextTodos
    })
  }

  handleRemove = (id) => {
    const {todos} = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }

  handleSelectColor = (color) => {
    this.setState({
      color: color
    })
  }

  render() {
    const {input, todos, color} = this.state;
    const {handleCreate, handleChange, handleKeyPress, handleToggle, handleRemove, handleSelectColor} = this;
    return (
        <TodoListTemplate form={<Form value={input} onCreate={handleCreate} onChange={handleChange} onKeyPress={handleKeyPress} color={color} />}
          palette={<Palette colors={colors} selected={color} onSelect={handleSelectColor} />}>
          <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} color={color} />
        </TodoListTemplate>
    );
  }
}

export default App;
