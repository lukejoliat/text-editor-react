import React from 'react';

function BoldMark(props) {
  return <strong>{props.children}</strong>
}

function ItalicMark(props) {
  return <i>{props.children}</i>
}

function CodeNode(props) {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  )
}

export { BoldMark, ItalicMark, CodeNode }