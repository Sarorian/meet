import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("render text input", () => {
    expect(NumberOfEventsWrapper.find(".event-number-input")).toHaveLength(1);
  });

  test("renders text input correctly", () => {
    const numberOfEvents = NumberOfEventsWrapper.state("numberOfEvents");
    expect(
      NumberOfEventsWrapper.find(".event-number-input").prop("value")
    ).toBe(numberOfEvents);
  });

  test("change state when text input changes", () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: 10,
    });
    const eventObject = { target: { value: 20 } };
    NumberOfEventsWrapper.find(".event-number-input").simulate(
      "change",
      eventObject
    );
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(20);
  });

  test("update events when text input changes", () => {
    const updateEventsMock = jest.fn();
    NumberOfEventsWrapper.setProps({ updateEvents: updateEventsMock });
    NumberOfEventsWrapper.setState({ numberOfEvents: 5 });
    const eventObject = { target: { value: 10 } };
    NumberOfEventsWrapper.find(".event-number-input").simulate(
      "change",
      eventObject
    );
    expect(updateEventsMock).toHaveBeenCalledTimes(1);
    expect(updateEventsMock).toHaveBeenCalledWith(undefined, 10);
  });
});
