import React from 'react';
import './Button.css';

export default function Button(props) {
  const { text, children, ...rest } = props;
  return (
    <button className="button" {...rest}>
      {text}
      {children}
    </button>
  );
}
