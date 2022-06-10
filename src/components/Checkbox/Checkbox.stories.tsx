import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AtomCheckbox } from "./Checkbox";

export default {
  title: "Atoms/Checkboxs",
  component: AtomCheckbox,
} as ComponentMeta<typeof AtomCheckbox>;

export const TemplateAtomCheckbox: ComponentStory<typeof AtomCheckbox> = (
  args
) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <AtomCheckbox
      label={'checkbox'}
      onChange={(e) => setChecked(e.target.checked)}
      checked={checked}
      disabled={args.disabled}
    />
  );
};
