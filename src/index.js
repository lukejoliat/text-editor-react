import React from 'react';
import ReactDOM from 'react-dom';
import TextEditor from './components/TextEditor';
import css from '../style.css';
import normalize from '../normalize.css';
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
module.hot.accept();
