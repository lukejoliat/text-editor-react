import React from 'react';
import Icon from 'react-icons-kit'
import { bold } from 'react-icons-kit/feather/bold'
import { italic } from 'react-icons-kit/feather/italic'

const ToolBar = (props) => {
    return (
        <div className="tool-bar">
            <Icon 
                icon={bold} 
                onClick={(e) => props.onIconClick(e, 'bold')} 
                className={`icon ${props.value.activeMarks.some(mark => mark.type === 'bold') ? 'icon-active' : ''}`}
            />
            <Icon 
                icon={italic} 
                onClick={(e) => props.onIconClick(e, 'italic')} 
                className={`icon ${props.value.activeMarks.some(mark => mark.type === 'italic') ? 'icon-active' : ''}`}
            />
        </div>
    )    
}

export default ToolBar