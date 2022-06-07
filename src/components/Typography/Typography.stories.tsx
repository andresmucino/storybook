import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AtomTypography, size, bolds } from "./Typography";

export default {
  title: "Typography",
  component: AtomTypography,
  argTypes: {
    size: {
      options: Object.keys(size),
      mapping: size,
      control: { type: "select" },
    },
    color: {
      control: {
        type: "color",
      },
    },
    bold: {
      control: {
        type: "select",
      },
      options: Object.keys(bolds),
      mapping: bolds,
    },
  },
} as ComponentMeta<typeof AtomTypography>;

const TemplateAtomTypography: ComponentStory<typeof AtomTypography> = (args) => (
  <AtomTypography {...args} />
);

export const Typography = TemplateAtomTypography.bind({});
Typography.args = {
  title: "Title",
  backgroundColor: "white",
  size: "text-base",
  color: "black",
  underline: false,
  bold: "font-thin",
};
