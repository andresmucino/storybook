import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AtomButton } from "../../components/Buttons/Button";
import { AtomButtonGroup } from "./ButtonGroup";

const color = "";

export default {
  title: "Button Groups",
  component: AtomButtonGroup,
} as ComponentMeta<typeof AtomButtonGroup>;

const TemplateAtomButtonGroup: ComponentStory<typeof AtomButtonGroup> = (
  args
) => <AtomButtonGroup {...args} />;

export const ButtonGroup = TemplateAtomButtonGroup.bind({});
ButtonGroup.args = {
  buttonOne: 'One',
  buttonTwo: 'two',
  buttonThree: 'three',
  color: 'white',
  backgroundColor: 'blue'
}