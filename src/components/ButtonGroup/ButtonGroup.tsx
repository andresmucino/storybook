interface AtomButtonGroupProps {
  buttonOne: string;
  buttonTwo: string;
  buttonThree: string;
  color?: string;
  backgroundColor?: string;
  onClickOne: () => void;
  onClickTwo: () => void;
  onClickThree: () => void;
}

export const AtomButtonGroup = ({
  buttonOne,
  buttonThree,
  buttonTwo,
  color,
  backgroundColor,
  onClickOne,
  onClickThree,
  onClickTwo,
}: AtomButtonGroupProps): JSX.Element => {
  const BUTTONS = "py-4 px-14 uppercase active:animate-pulse active:opacity-50";
  return (
    <div className="inline-flex space-x-0 overflow-hidden border rounded-md divide-x divide-black">
      <button
        className={BUTTONS}
        style={{ color, backgroundColor }}
        onClick={onClickOne}
      >
        {buttonOne}
      </button>
      <button
        className={BUTTONS}
        style={{ color, backgroundColor }}
        onClick={onClickTwo}
      >
        {buttonTwo}
      </button>
      <button
        className={BUTTONS}
        style={{ color, backgroundColor }}
        onClick={onClickThree}
      >
        {buttonThree}
      </button>
    </div>
  );
};
