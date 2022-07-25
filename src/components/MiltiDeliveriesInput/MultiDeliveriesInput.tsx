import React from "react";
import { Inputs } from "../Input/Input";

interface MoleculeMultiDeliveriesInputProps {
  data: Array<InputsProps>;
  color: string;
  setData: (data: Array<InputsProps>) => void;
}

export interface InputsProps {
  value?: string;
  placeholder?: string;
  name?: string;
}

export const MoleculeMultiDeliveriesInput: React.FC<MoleculeMultiDeliveriesInputProps> =
  ({ color, data, setData }) => {
    const [inputList, setInputList] = React.useState<Array<InputsProps>>(data);

    React.useEffect(() => {
      setInputList(data);
    }, [data]);

    const handleOnchangeValue = (
      target: { value: string; name?: string },
      index: number
    ) => {
      const { name, value } = target;
      const list: Array<InputsProps> = [...inputList];

      list[index] = { value, name, placeholder: data[index].placeholder };

      setInputList(list);
      setData(list);
    };

    const StepComponent = inputList?.map((step, index) => {
      return (
        <div className="relative">
          <div className="relative pb-14">
            <div
              className={`w-5 h-5 absolute left-3 z-20 top-5 rounded-full bg-white border-2 border-blue-500 mr-2`}
            />
            <Inputs
              icon={""}
              iconName={""}
              placeholder={step.placeholder}
              onChange={(e) => {
                const { name, value } = e.target;
                const target = { name, value };
                handleOnchangeValue(target, index);
              }}
            />
          </div>

          <div
            className={
              index !== inputList.length - 1
                ? "absolute w-0.5 h-28 bg-white z-10 top-8 left-21px right-0 bg-gray-700"
                : ""
            }
          ></div>
        </div>
      );
    });

    return (
      <div className={"container vertical"}>
        <div className={"CONTAINER"}>{StepComponent}</div>
      </div>
    );
  };
