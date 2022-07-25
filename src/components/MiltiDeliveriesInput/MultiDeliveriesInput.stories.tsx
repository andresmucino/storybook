import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { useState } from "react";
import {
  MoleculeMultiDeliveriesInput,
  InputsProps,
} from "./MultiDeliveriesInput";

export default {
  title: "Molecules/Multi Deliveries",
  component: MoleculeMultiDeliveriesInput,
} as ComponentMeta<typeof MoleculeMultiDeliveriesInput>;

const inputs = [
  { name: "", value: "", placeholder: "¿Dónde lo recojemos?" },
  { name: "", value: "", placeholder: "¿A donde lo llevamos?" },
];

export const MultiDeliveriesInput: ComponentStory<
  typeof MoleculeMultiDeliveriesInput
> = (args) => {
  const data = inputs;
  const [values, setValues] = useState<Array<InputsProps>>(data);
  React.useEffect(() => {
    setValues(data);
  }, [data]);

  const setData = (data: Array<InputsProps>) => {
    setValues(data);
  };

  return (
    <MoleculeMultiDeliveriesInput data={values} color={""} setData={setData} />
  );
};
