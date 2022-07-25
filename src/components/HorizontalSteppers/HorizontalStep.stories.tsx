import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MoleculeHorizontalStep } from "./HorizontalStep";

export default {
  title: "Molecules/Steppers",
  component: MoleculeHorizontalStep,
} as ComponentMeta<typeof MoleculeHorizontalStep>;

const stepData = [
  { description: "step 1" },
  { description: "step 2" },
  { description: "step 3" },
  { description: "step 4" },
  { description: "step 5" },
];

export const HorizontalStep: ComponentStory<typeof MoleculeHorizontalStep> = (
  args
) => <MoleculeHorizontalStep steps={stepData} currentStep={args.currentStep || 1}  />;
