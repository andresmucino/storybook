import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MoleculeVerticalStep } from "./VerticalStep";

export default {
  title: "Molecules/Steppers",
  component: MoleculeVerticalStep,
} as ComponentMeta<typeof MoleculeVerticalStep>;

const stepData = [
  { description: "step 1" },
  { description: "step 2" },
  { description: "step 3" },
  { description: "step 4" },
  { description: "step 5" },
];

export const VerticalStep: ComponentStory<typeof MoleculeVerticalStep> = (
  args
) => {
  return (
    <MoleculeVerticalStep
      steps={stepData}
      currentStep={args.currentStep || 1}
    />
  );
};
