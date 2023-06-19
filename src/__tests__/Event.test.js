import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";

describe("<Event /> component", () => {
  let EventWrapper;
  const event = {
    id: 1,
    summary: "Event Summary",
    start: { dateTime: "2023-06-19T10:00:00" },
    location: "Event Location",
    description: "Event Description",
  };

  beforeAll(() => {
    EventWrapper = shallow(<Event event={event} />);
  });

  test("renders event summary", () => {
    expect(EventWrapper.find("h2").text()).toBe(event.summary);
  });

  test("renders event start time", () => {
    expect(EventWrapper.find("p").at(0).text()).toBe(event.start.dateTime);
  });

  test("renders event location", () => {
    expect(EventWrapper.find("p").at(1).text()).toBe(event.location);
  });

  test("initially hides event details", () => {
    expect(EventWrapper.find("p").at(2)).toHaveLength(0);
  });

  test("toggles event details visibility when 'Show Details' button is clicked", () => {
    EventWrapper.find("button").simulate("click");
    expect(EventWrapper.find("p").at(2).text()).toBe(event.description);

    EventWrapper.find("button").simulate("click");
    expect(EventWrapper.find("p").at(2)).toHaveLength(0);
  });
});
