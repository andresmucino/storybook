import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Typography, size, bolds } from "./Typography";

export default {
  title: "Titles",
  component: Typography,
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
} as ComponentMeta<typeof Typography>;

const TemplateTypography: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Title = TemplateTypography.bind({});
Title.args = {
  title: "Title",
  backgroundColor: "white",
  size: "text-base",
  color: "black",
  underline: false,
  bold: "font-thin",
};
