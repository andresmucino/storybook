import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AtomButton } from "../../components/Buttons/Button";
import { AtomButtonGroup } from "./ButtonGroup";

const color = "";

export default {
  title: "Button Groups",
  component: AtomButtonGroup,
  argTypes: {
    color: { type: "color", options: { color } },
  },
} as ComponentMeta<typeof AtomButtonGroup>;

const TemplateAtomButtonGroup: ComponentStory<typeof AtomButtonGroup> = (
  args
) => (
  <AtomButtonGroup>
    <AtomButton
      title={"hola"}
      onClick={() => console.log("click")}
      backgroundColor="blue"
    />
    <AtomButton
      title={"hola"}
      onClick={() => console.log("click")}
      backgroundColor="blue"
    />
    <AtomButton
      title={"hola"}
      onClick={() => console.log("click")}
      backgroundColor="blue"
    />
  </AtomButtonGroup>
);

export const ButtonGroup = TemplateAtomButtonGroup.bind({});
