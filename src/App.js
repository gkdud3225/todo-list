import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div>
        <TodoListTemplate form={<Form/>}>
            List #1 React Todo List 실습
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;
