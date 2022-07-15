import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { MoleculeComboBox } from "./ComboBox";

export default {
  title: "Molecules/ComboBoxes",
  component: MoleculeComboBox,
} as ComponentMeta<typeof MoleculeComboBox>;
const data = [
  { value: "Dirección 1" },
  { value: "Dirección 2" },
  { value: "Dirección 3" },
  { value: "Dirección 4" },
];

export const ComboBox: ComponentStory<typeof MoleculeComboBox> =
  (args) => {
    const [value, setValue] = useState("");

    return (
      <MoleculeComboBox
        options={data}
        onChange={(value_) => setValue(value_)}
        value={value}
      />
    );
  };

