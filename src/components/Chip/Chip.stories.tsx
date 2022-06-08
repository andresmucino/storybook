import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ButtonChip } from "./Chip";

export default {
  title: "Chips",
  component: ButtonChip,
} as ComponentMeta<typeof ButtonChip>;

const TemplateButtonChip: ComponentStory<typeof ButtonChip> = (args) => (
  <ButtonChip {...args} />
);

export const Chip = TemplateButtonChip.bind({});
