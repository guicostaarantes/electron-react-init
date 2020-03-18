import React from "react";
import { mount } from "enzyme";
import Selector from "./Selector";
import { Translator } from "../../utils/translations";
import { Language } from "../../utils/translations/ELanguage";
import ptbr from "../../utils/translations/languages/ptbr";
import EKey from "../../utils/translations/EKey";
import { Button } from "@material-ui/core";

test("Test Selector", () => {
  const callOption1 = jest.fn();
  const callOption2 = jest.fn();
  const callOption3 = jest.fn();

  const translator = new Translator(Language.ptbr);

  const options = [
    {
      label: EKey.backToHome,
      onSelect: callOption1
    },
    {
      label: EKey.welcome,
      onSelect: callOption2
    },
    {
      label: EKey.aboutTheApp,
      onSelect: callOption3
    }
  ];

  const buttonProps = {
    color: "primary"
  };

  const wrapper = mount(<Selector translator={translator} options={options} buttonProps={buttonProps} />);

  expect(wrapper).toExist();
  expect(wrapper).toContainMatchingElements(3, Button);
  expect(wrapper.find(Button).at(0)).toHaveText(ptbr[EKey.backToHome]);
  expect(wrapper.find(Button).at(1)).toHaveText(ptbr[EKey.welcome]);
  expect(wrapper.find(Button).at(2)).toHaveText(ptbr[EKey.aboutTheApp]);
  expect(wrapper.find(Button).at(0)).toHaveProp("color", "primary");
  expect(wrapper.find(Button).at(1)).toHaveProp("color", "primary");
  expect(wrapper.find(Button).at(2)).toHaveProp("color", "primary");
  wrapper
    .find(Button)
    .at(0)
    .simulate("click");
  expect(callOption1).toBeCalled();
  wrapper
    .find(Button)
    .at(1)
    .simulate("click");
  expect(callOption2).toBeCalled();
  wrapper
    .find(Button)
    .at(2)
    .simulate("click");
  expect(callOption3).toBeCalled();
});
