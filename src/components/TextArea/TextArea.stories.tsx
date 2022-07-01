import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { AtomTextArea } from "./TextArea";

export default {
  title: "TextAreas",
  component: AtomTextArea,
} as ComponentMeta<typeof AtomTextArea>;

export const TextArea: ComponentStory<typeof AtomTextArea> = (args) => {
  const [value, setValue] = useState("");

  return (
    <AtomTextArea
      value={value}
      onChange={(value) => setValue(value)}
      placeholder={args.placeholder}
      disabled={args.disabled}
      readOnly={args.readOnly}
      required={args.required}
      name={args.name}
      showLabel={args.showLabel}
      label={args.label}
      error={args.error}
      showHelperText={args.showHelperText}
      helperText={args.helperText}
    />
  );
};
