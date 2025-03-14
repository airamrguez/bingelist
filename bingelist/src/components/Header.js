import React from 'react';
import './Header.css';

export default function Header(props) {
  const { left, text, right } = props;
  return (
    <div className="header">
      <span className="left">{left}</span>
      <span className="text">{text}</span>
      <span className="right">{right}</span>
    </div>
  );
}
