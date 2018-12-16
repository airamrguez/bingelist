import React from 'react';
import './FluidText.css';

function FluidText(props) {
  return (
    <div className="fluid-container">
      <span>{props.text}</span>
    </div>
  );
}

FluidText.defaultProps = {
  text: null,
};

export default FluidText;
