// Import React!
import React from 'react'
import { Editor } from 'slate-react'
import ToolBar from './ToolBar'
import initialValue from '../assets/initialValue'
import { BoldMark, ItalicMark, CodeNode } from '../utils/EditorStyles'

// Define our app...
class TextEditor extends React.Component {
  // Set the initial value when the app is first constructed.
  constructor(props) {
      super(props)
      this.state = { value: initialValue }
      this.onChange = this.onChange.bind(this)
      this.onKeyDown = this.onKeyDown.bind(this)
      this.onIconClick = this.onIconClick.bind(this)
  }

  // On change, update the app's React state with the new editor value.
  onChange({ value }) {
    this.setState(() => ({ value }))
  }
  
  onIconClick(e, type) {
    e.preventDefault()
    this.editor.toggleMark(type)
    this.editor.focus()

  }
  
  onKeyDown (event, editor, next) {
    if (!event.ctrlKey) return next()

    switch (event.key) {
      case 'b': {
        event.preventDefault()
        editor.toggleMark('bold')
        break
      }
      case '`': {
        const isCode = editor.value.blocks.some(block => block.type == 'code')
        event.preventDefault()
        editor.setBlocks(isCode ? 'paragraph' : 'code')
        break
      }
      default: {
        return next()
      }
    }
  }

  // Render the editor.
  render() {
    return (
        <div>
            <ToolBar onIconClick={this.onIconClick} value={this.state.value} className="tool-bar" />
            <Editor 
                value={this.state.value} 
                onChange={this.onChange} 
                onKeyDown={this.onKeyDown} 
                renderNode={this.renderNode} 
                renderMark={this.renderMark} 
                ref={editor => (this.editor = editor)} 
            />
        </div>
    );
  }
  
  renderNode (props, editor, next) {
    switch (props.node.type) {
      case 'code':
        return <CodeNode {...props} />
      default:
        return next()
    }
  }
  
  // Add a `renderMark` method to render marks.
  renderMark (props, editor, next) {
    switch (props.mark.type) {
      case 'bold':
        return <BoldMark {...props} />
      case 'italic':
        return <ItalicMark {...props} />
      default:
        return next()
    }
  }
}
export default TextEditor