import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AtomComboBox } from "./ComboBox";

export default {
  title: "ComboBoxes",
  component: AtomComboBox,
} as ComponentMeta<typeof AtomComboBox>;

const TemplateAtomComboBox: ComponentStory<typeof AtomComboBox> = (args) => (
  <AtomComboBox {...args} />
);

export const ComboBox = TemplateAtomComboBox.bind({});
