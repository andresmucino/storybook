import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AtomBadge } from "./Badge";

export default {
  title: "Atoms/Badges",
  component: AtomBadge,
  
} as ComponentMeta<typeof AtomBadge>;

const TemplateAtomBadge: ComponentStory<typeof AtomBadge> = (args) => (
  <AtomBadge {...args} />
);

export const Bagde = TemplateAtomBadge.bind({});
Bagde.args = {
    title: 'Admin',
    color: 'black'
}