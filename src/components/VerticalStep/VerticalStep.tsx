import React, { useState } from "react";

interface MoleculeVerticalStepperProps {
  steps: Array<VerticalStepProps>;
  currentStep: number;
}

export interface VerticalStepProps {
  description: string;
  complete?: boolean;
}

export const MoleculeVerticalStep: React.FC<MoleculeVerticalStepperProps> = ({
  currentStep,
  steps,
}) => {
  const [steppers, setStepers] = useState<Array<VerticalStepProps>>([]);
  const stepsStateReference = React.useRef<Array<VerticalStepProps>>();

  const updateSteps = (steps: Array<VerticalStepProps>, stepNumber: number) => {
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
      const stepObject: VerticalStepProps = {
        description: "",
        complete: false,
      };

      stepObject.description = item.description;
      stepObject.complete = item.complete;

      return stepObject;
    });

    stepsStateReference.current = stepState;

    const currentSteps = updateSteps(stepState, currentStep);

    setStepers(currentSteps);
  }, [currentStep, steps]);

  const StepsComponent = steppers?.map((item, index) => (
    <div>
      <div key={index} className="flex w-32 items-baseline absolute">
        <div
          className={`border-4 w-10 h-10 rounded-full ${
            !item.complete
              ? "bg-blue-600  border-blue-600 "
              : "bg-green-600  border-green-600 "
          }`}
        >
          <p className="text-xl text-center text-white pt-0.5">{index + 1}</p>
        </div>
        <span className="text-xl pl-2 font-semibold">{item.description}</span>
      </div>
      <div
        className={
          index !== steppers.length - 1
            ? `w-3 h-36 border-l-8 border-solid relative top-9 ${
                !item.complete ? "border-blue-600" : "border-green-600"
              }  ml-4`
            : ""
        }
      ></div>
    </div>
  ));

  return (
    <div>
      <div className="mx-0 p-0 flex flex-col  justify-between items-start">
        {StepsComponent}
      </div>
    </div>
  );
};
