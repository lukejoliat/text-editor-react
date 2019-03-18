import React from 'react';
import ReactDOM from 'react-dom';
import TextEditor from './components/TextEditor';
class Main extends React.Component {
  render() {
    return (
      <div className="editor-wrapper">
        <TextEditor />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));