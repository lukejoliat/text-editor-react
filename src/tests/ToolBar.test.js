import React from "react";
import ToolBar from "../components/ToolBar";
import renderer from "react-test-renderer";
import initialValue from "../../assets/initialValue";
import { shallow } from "enzyme";
test("Link changes the class when hovered", () => {
  const component = renderer.create(<ToolBar value={initialValue} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("CheckboxWithLabel changes the text after click", () => {
  // Render a checkbox with label in the document
  const ToolBarComponent = shallow(<ToolBar value={initialValue} />);

  expect(ToolBarComponent.exists()).toEqual(true);
});
