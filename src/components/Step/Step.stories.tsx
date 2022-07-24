import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MoleculeStep } from "./Step";

export default {
  title: "Stepers",
  component: MoleculeStep,
} as ComponentMeta<typeof MoleculeStep>;

const stepData = [
  { description: "step 1" },
  { description: "step 2" },
  { description: "step 3" },
  { description: "step 4" },
  { description: "step 5" },
];

export const Step: ComponentStory<typeof MoleculeStep> = (args) => {
  return <MoleculeStep steps={stepData} currentStep={args.currentStep || 1} />;
};
