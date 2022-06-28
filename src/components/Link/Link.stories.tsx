import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AtomLink, color } from "./Link";

export default {
  title: "Atoms/Links",
  component: AtomLink,
  argTypes: {
    color: {
      options: Object.keys(color),
      mapping: color,
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof AtomLink>;

const TemplateAtomLink: ComponentStory<typeof AtomLink> = (args) => (
  <AtomLink {...args} />
);

export const Link = TemplateAtomLink.bind({});
Link.args = {
  href: "#",
  color: "blue",
  label: "Space",
};
