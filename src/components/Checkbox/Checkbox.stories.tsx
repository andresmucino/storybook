import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AtomCheckbox, type } from "./Checkbox";

export default {
  title: "Atoms/Checkboxs",
  component: AtomCheckbox,
  argTypes: {
    type: {
      options: Object.keys(type),
      mapping: type,
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof AtomCheckbox>;

export const Checkbox: ComponentStory<typeof AtomCheckbox> = (
  args
) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <AtomCheckbox
      label={args.label || "checkbox"}
      onChange={(e) => setChecked(e.target.checked)}
      checked={checked}
      disabled={args.disabled}
      type={args.type || 'checkbox'}
    />
  );
};
