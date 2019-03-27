import React from "react";
import TextEditor from "../components/TextEditor";
import { mount } from "enzyme";

let TextEditorComponent;
beforeEach(() => {
  window.getSelection = () => {
    return {
      removeAllRanges: () => {}
    };
  };
  TextEditorComponent = mount(<TextEditor />);
});

test("Expect Text Editor to be defined", () => {
  expect(TextEditorComponent.exists()).toEqual(true);
});

test("Expect initial value to be present", () => {
  const editor = TextEditorComponent.find("Editor");
  expect(editor.text()).toBe("A line of text in a paragraph.");
});
