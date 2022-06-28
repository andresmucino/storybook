import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { paths } from "../Icons/Paths";
import { Inputs, iconPosition, color, labelColor } from "./Input";

export default {
  title: "Inputs",
  component: Inputs,
  argTypes: {
    iconName: {
      options: Object.keys(paths),
      mapping: paths,
      control: { type: "select" },
    },
    iconPosition: {
      options: Object.keys(iconPosition),
      mapping: iconPosition,
      control: { type: "select" },
    },
    iconColor: {
      options: Object.keys(color),
      mapping: color,
      control: { type: "select" },
    },
    labelColor: {
      options: Object.keys(labelColor),
      mapping: labelColor,
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Inputs>;

export const TemplateInput: ComponentStory<typeof Inputs> = (args) => {
  const [value, setValue] = React.useState("");

  return (
    <Inputs
      placeholder={args.placeholder}
      value={value}
      error={args.error}
      required={args.required}
      readOnly={args.readOnly}
      helperText={args.helperText}
      icon={args.icon}
      iconName={args.iconName || paths.Tool}
      iconPosition={args.iconPosition}
      iconColor={args.iconColor}
      label={args.label}
      labelColor={args.labelColor}
      showLabel={args.showLabel}
      onChange={(event) => {
        setValue(event.target.value);
      }}
    />
  );
};
