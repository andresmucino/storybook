import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Icons, color, size } from "./Icons";
import { paths } from "./Paths";

export default {
  title: "Icons",
  Component: Icons,
  argTypes: {
    name: {
      options: Object.keys(paths),
      mapping: paths,
      control: { type: "select" },
    },
    color: {
      options: Object.keys(color),
      mapping: color,
      control: { type: "select" },
    },
    size: {
      options: Object.keys(size),
      mapping: size,
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Icons>;

const TemplateIcon: ComponentStory<typeof Icons> = (args) => (
  <Icons {...args} />
);

export const Icon = TemplateIcon.bind({});
Icon.args = {
  name: "Tool",
  color: "black",
  size: "default",
};
