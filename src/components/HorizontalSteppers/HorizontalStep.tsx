import React, { useState } from "react";

interface MoleculeHorizontalStepsProps {
  steps: Array<HorizontalStepsProps>;
  currentStep: number;
}

export interface HorizontalStepsProps {
  description: string;
  complete?: boolean;
}

export const MoleculeHorizontalStep: React.FC<MoleculeHorizontalStepsProps> = ({
  currentStep,
  steps,
}) => {
  const [steppers, setSteppers] = useState<Array<HorizontalStepsProps>>([]);
  const stepsStateReference = React.useRef<Array<HorizontalStepsProps>>();

  const updateSteps = (
    steps: Array<HorizontalStepsProps>,
    stepNumber: number
  ) => {
    const newSteps = [...steps];
    let stepCounter = 0;

    while (stepCounter < newSteps.length) {
      if (stepCounter === stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          complete: false,
        };

        stepCounter++;
      } else if (stepCounter < stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          complete: true,
        };

        stepCounter++;
      } else {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          complete: false,
        };

        stepCounter++;
      }
    }

    return newSteps;
  };

  React.useEffect(() => {
    const stepState = steps.map((item, index) => {
      const stepObject: HorizontalStepsProps = {
        description: "",
        complete: false,
      };

      stepObject.description = item.description;
      stepObject.complete = item.complete;

      return stepObject;
    });

    stepsStateReference.current = stepState;

    const currentSteps = updateSteps(stepState, currentStep);

    setSteppers(currentSteps);
  }, [currentStep, steps]);

  const StepsComponent = steppers?.map((item, index) => (
    <div className="flex">
      <div key={index} className="absolute">
        <div
          className={`border-2 w-10 h-10 rounded-full
        ${
          !item.complete
            ? "bg-blue-600 border-blue-600"
            : "bg-green-600 border-green-600"
        }
        flex justify-center items-center`}
        >
          <p className="text-white">{index  + 1}</p>
        </div>
        <div className="pt-2 text-center">{item.description}</div>
      </div>
      <div
        className={
          index !== steppers.length - 1
            ? `w-36 h-3 border-b-8 mt-3 ${
                !item.complete ? "border-blue-600" : "border-green-600"
              } relative left-8`
            : ""
        }
      ></div>
    </div>
  ));

  return <div className="flex">{StepsComponent}</div>;
};
