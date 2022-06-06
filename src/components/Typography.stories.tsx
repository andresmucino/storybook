import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Typography } from "./Typography";

export default {
  title: "Titles",
  component: Typography,
  argTypes: {
    size: {
      options: [
        "text-sm",
        "text-base",
        "text-lg",
        "text-xl",
        "text-2xl",
        "text-3xl",
      ],
      control: { type: "select" },
    },
    color: {
      control: {
        type: "select",
        options: ["text-red-200", "text-black", "text-red-900"],
      },
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
  size: "text-sm",
  color: "text-red-200",
};
