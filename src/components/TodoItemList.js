import React, {Component} from 'react';

/* (동적인) 리스트를 렌더링 할 경우에는 클래스형 컴포넌트를 사용해야 성능 최적화를 할 수 있음 */
class TodoItemList extends Component {
    render() {
        const {todos, onToggle, onRemove} = this.props;
        return (
            <div>
            </div>
        );
    }
}

export default TodoItemList;