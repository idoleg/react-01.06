import React from 'react';

export function Message(props) {
  const { name, content } = props;
  return <li><strong>{ name }:</strong> {content}</li>
}