import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AtomAvatar } from "./Avatar";

export default {
  title: "Avatars",
  componen: AtomAvatar,
  argTypes: {
    img: {
      control: { type: "file", accept: ".png" },
    },
    backgroundColor: {
      control: { type: "color" },
    },
    color: {
      control: { type: "color" },
    },
  },
} as ComponentMeta<typeof AtomAvatar>;

const TemplateAtomAvatar: ComponentStory<typeof AtomAvatar> = (args) => (
  <AtomAvatar {...args} />
);

export const Avatar = TemplateAtomAvatar.bind({});
Avatar.args = {
  words: "AM",
};
