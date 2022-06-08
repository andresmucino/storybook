import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AtomCheckbox } from "./Checkbox";

export default {
  title: "Checkboxs",
  component: AtomCheckbox,
} as ComponentMeta<typeof AtomCheckbox>;

const TemplateAtomCheckbox: ComponentStory<typeof AtomCheckbox> = (args) => {
  const [check, setCheck] = React.useState(false);
  return (
    <AtomCheckbox
      checked={check}
      color={"blue"}
      onChange={(event) => setCheck(event.target.checked)}
      disabled={false}
    />
  );
};

export const Checkbox = TemplateAtomCheckbox.bind({});
