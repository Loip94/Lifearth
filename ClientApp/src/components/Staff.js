import React, { Component } from 'react';

export class Staff extends Component {
  static displayName = Staff.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementStaff = this.incrementStaff.bind(this);
  }

  incrementStaff() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
    return (
      <div>
        <h1>Staff</h1>

        <p>This is a simple example of a React component.</p>

        <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

        <button className="btn btn-primary" onClick={this.incrementStaff}>Increment</button>
      </div>
    );
  }
}
