import React from 'react';
import './Palette.css';

/* 동적인 스타일을 줄때는 style={}을 사용한다. 또, 객체를 전달하는 것이기 때문에 {{}}로 사용해야 한다. */
const Color = ({color, active, onClick}) => {
    return (
        <div className={`color $(active && 'active'}`} style={{background: color}} onClick={onClick}></div>
    );
}

const Palette = ({colors, selected, onSelect}) => {
    const colorList = colors.map(
        (color) => (<Color color={color} active={selected===color} onClick={() => onSelect(color)} key={color}/>)
    );
    return (
        <div className="palette">
            {colorList}
        </div>
    );
}

export default Palette;