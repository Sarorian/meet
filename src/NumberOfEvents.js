import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value,
    });
  };

  render() {
    const { numberOfEvents } = this.state;

    return (
      <div className="NumberOfEvents">
        <label htmlFor="numberOfEventsInput">
          Number of Events:
          <input
            id="numberOfEventsInput"
            type="number"
            value={numberOfEvents}
            onChange={this.handleInputChanged}
          />
        </label>
      </div>
    );
  }
}

export default NumberOfEvents;
