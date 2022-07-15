import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { MoleculeSchedule } from "./Schedule";

export default {
  title: "Schedules",
  component: MoleculeSchedule,
} as ComponentMeta<typeof MoleculeSchedule>;

export const Schedule: ComponentStory<typeof MoleculeSchedule> = (args) => {
  const [valueHour, setValueHour] = useState("");
  const [valueMinutes, setValueMinutes] = useState("");
  return (
    <MoleculeSchedule
      text={args.text || "Hoy, 14 de Julio"}
      valueHour={valueHour || "00"}
      valueMinutes={valueMinutes || "00"}
      onChangeHour={(e) => setValueHour(e.target.value)}
      onChangeMinutes={(e) => setValueMinutes(e.target.value)}
    />
  );
};
