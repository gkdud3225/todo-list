import React, {Component} from 'react';
import TodoItem from './TodoItem';

/* (동적인) 리스트를 렌더링 할 경우에는 클래스형 컴포넌트를 사용해야 성능 최적화를 할 수 있음 */
class TodoItemList extends Component {
    render() {
        const {todos, onToggle, onRemove} = this.props;
        /* todos 안에 있는 객체들을 화면에 보여주기 위해선 객체 배열을 컴포넌트 배열로 변환해야한다.
        * 배열을 렌더링 할 때는 key값이 꼭 있어야 한다. index를 key로 사용하는 것은 권장하지 않음.
        */
        const todoList = todos.map(
            ({id, text, checked}) => (
                <TodoItem id={id} text={text} checked={checked} onToggle={onToggle} onRemove={onRemove} key={id} />
            )
        );
        // const todoList = todos.map(
        //     (todo) => (
        //         <TodoItem {...todo} onToggle={onToggle} onRemove={onRemove} key={todo.id} />
        //     )
        // );
        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;