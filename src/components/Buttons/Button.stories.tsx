import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AtomButton, size } from "./Button";

export default {
  title: "Buttons",
  component: AtomButton,
  argTypes: {
    width: {
      options: Object.keys(size),
      mapping: size,
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof AtomButton>;

const TemplateAtomButton: ComponentStory<typeof AtomButton> = (args) => (
  <AtomButton {...args} />
);

export const Button = TemplateAtomButton.bind({});
Button.args = {
  title: "Button",
  color: "white",
  backgroundColor: "#9c2525",
  width: "w-24",
  rounded: false
};
