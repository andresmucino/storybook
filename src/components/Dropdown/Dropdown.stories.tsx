import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { MoleculeDropdown } from "./Dropdown";

export default {
  title: "Molecules/Dropdowns",
  component: MoleculeDropdown,
} as ComponentMeta<typeof MoleculeDropdown>;

const data = [
  { value: "Dirección 1" },
  { value: "Dirección 2" },
  { value: "Dirección 3" },
  { value: "Dirección 4" },
];

export const Dropdown: ComponentStory<typeof MoleculeDropdown> = (args) => {
  const [value, setValue] = useState(data[0].value);

  return (
    <MoleculeDropdown
      options={data}
      onChange={(value_) => setValue(value_)}
      value={value}
      title={"Title"}
      subtitle={value}
    />
  );
};
