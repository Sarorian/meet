import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;

  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("renders the number of events input field", () => {
    expect(NumberOfEventsWrapper.find("input")).toHaveLength(1);
  });

  test("sets the initial number of events to 32", () => {
    expect(NumberOfEventsWrapper.find("input").prop("value")).toBe(32);
  });

  test("updates the number of events state when the input value changes", () => {
    const eventObject = { target: { value: 10 } };
    NumberOfEventsWrapper.find("input").simulate("change", eventObject);
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(10);
  });
});
