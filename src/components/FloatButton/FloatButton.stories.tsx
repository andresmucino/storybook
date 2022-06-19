import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FloatButton, size, color, backgroundColor } from "./FloatButton";

export default {
  title: "Float buttons",
  component: FloatButton,
  argTypes: {
    size: {
      options: Object.keys(size),
      mapping: size,
      control: { type: "select" },
    },
    color: {
      options: Object.keys(color),
      mapping: color,
      control: { type: "select" },
    },
    backgroundColor: {
      options: Object.keys(backgroundColor),
      mapping: backgroundColor,
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof FloatButton>;

export const Floatbutton: ComponentStory<typeof FloatButton> = (args) => (
  <FloatButton {...args} />
);
