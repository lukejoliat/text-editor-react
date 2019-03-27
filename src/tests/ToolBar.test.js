import React from "react";
import ToolBar from "../components/ToolBar";
import initialValue from "../../assets/initialValue";
import { mount } from "enzyme";

let ToolBarComponent = null;
const onIconClick = jest.fn();
beforeEach(() => {
  ToolBarComponent = mount(
    <ToolBar value={initialValue} onIconClick={onIconClick} />
  );
});

test("Expect toolbar to be defined", () => {
  expect(ToolBarComponent.exists()).toEqual(true);
});

test("Expect icons to be rendered", () => {
  expect(ToolBarComponent.find("Icon").length).toBe(2);
});
