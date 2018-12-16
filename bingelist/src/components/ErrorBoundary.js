import React, { Component } from 'react';
import FluidText from './FluidText';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    // The error could be sent to a logging system, but it's not the
    // purpose of this project.
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <FluidText text="Ups! Something went wrong." />;
    }
    return this.props.children;
  }
}
