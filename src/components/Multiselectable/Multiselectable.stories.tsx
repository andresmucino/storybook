import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { MultiSelect } from "./Multiselectable";

export default {
  title: "Molecules/MultiSelectables",
  component: MultiSelect,
} as ComponentMeta<typeof MultiSelect>;

export const Multiselect: ComponentStory<typeof MultiSelect> = (args) => {
  const [value, setValue] = useState("");
  return (
    <MultiSelect
      options={[
        { value: "Dirección 1" },
        { value: "mesa" },
        { value: "Canica" },
        { value: "Diccionario" },
      ]}
      onChange={(val) => setValue(val)}
      value={value}
    />
  );
};
