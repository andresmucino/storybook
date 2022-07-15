import React from "react";

interface MoleculeScheduleProps {
  text: string;
  valueHour: string;
  valueMinutes: string;
  onChangeHour: (e: any) => void;
  onChangeMinutes: (e: any) => void;
}

export const MoleculeSchedule: React.FC<MoleculeScheduleProps> = ({
  text,
  valueHour,
  valueMinutes,
  onChangeHour,
  onChangeMinutes,
}) => {
  const INPUTS = `h-10 border w-14 mx-2 focus:ring-transparent outline-none focus:outline-none resize-none text-center`;
  return (
    <div className="border px-5 py-2 bg-stone-300">
      <div className="pb-2 ml-2">
        <p>{text}</p>
      </div>
      <div className="flex items-center">
        <div>
          <input
            type="number"
            value={valueHour}
            onChange={onChangeHour}
            onInput={(e) => {
              const limitHour = Math.max(
                0,
                Number.parseInt((e.target as HTMLInputElement).value)
              )
                .toString()
                .slice(0, 2);

              (e.target as HTMLInputElement).value =
                Number(limitHour) > 23
                  ? "00"
                  : Number(limitHour) < 10
                  ? `0${limitHour}`
                  : limitHour;
            }}
            className={INPUTS}
          />
        </div>
        <span className="text-2xl">:</span>
        <div>
          <input
            type="number"
            value={valueMinutes}
            onChange={onChangeMinutes}
            onInput={(e) => {
              const limitMinutes = Math.max(
                0,
                Number.parseInt((e.target as HTMLInputElement).value)
              )
                .toString()
                .slice(0, 2);

              (e.target as HTMLInputElement).value =
                Number(limitMinutes) > 59
                  ? "00"
                  : Number(limitMinutes) < 10
                  ? `0${limitMinutes}`
                  : limitMinutes;
            }}
            className={INPUTS}
          />
        </div>
        <span className="text-base ml-1">hrs</span>
      </div>
    </div>
  );
};
