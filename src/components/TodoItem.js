import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
        const {text, checked, id, onToggle, onRemove} = this.props;
        return (
            /* onClick={onToggle(id)}와 같이 쓰면 해당 함수가 렌더링될때 호출이 된다..
            *  즉, 해당 함수가 호출되면 데이터가 변경되고, 데이터가 변경되면 리렌더링되고, 그러면 또 함수가 호출되고.. 이게 무한 반복..
            */
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // 이 코드가 없으면 onRemove->onToggle이 실행되면서 삭제가 제대로 진행되지 않음. 즉, 삭제시에는 onToggle이 실행되지 않도록 막기 위함.
                    onRemove(id)}
                }>&times;</div>
                {checked && (<div className="check-mark">&#x2713;</div>)}
            </div>
        );
    }
}

export default TodoItem;