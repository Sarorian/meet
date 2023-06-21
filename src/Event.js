import React, { Component } from "react";

class Event extends Component {
  state = {
    showDetails: false,
  };

  handleDetailsToggle = () => {
    this.setState((prevState) => ({
      showDetails: !prevState.showDetails,
    }));
  };

  render() {
    const { event } = this.props;
    const { showDetails } = this.state;

    return (
      <div className="event">
        <h2>{event.summary}</h2>
        <p>{event.start.dateTime}</p>
        <p>{event.location}</p>
        {showDetails && (
          <div>
            <h4>About event:</h4>
            <p>{event.description}</p>
          </div>
        )}
        <button onClick={this.handleDetailsToggle}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>
    );
  }
}

export default Event;
