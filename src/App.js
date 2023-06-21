import React, { Component } from "react";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import "./App.css";
import { getEvents, extractLocations } from "./api";
import "./nprogress.css";
import NumberOfEvents from "./NumberOfEvents";

class App extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      locations: [],
      numberOfEvents: 32,
    };
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      let locationEvents = events;

      if (location && location !== "all") {
        locationEvents = events.filter((event) => event.location === location);
      }

      const { numberOfEvents } = this.state;
      const filteredEvents = locationEvents.slice(
        0,
        eventCount || numberOfEvents
      );

      this.setState({
        events: filteredEvents,
      });
    });
  };

  render() {
    return (
      <div className="App">
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          numberOfEvents={this.state.numberOfEvents}
          updateEvents={this.updateEvents}
        />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
