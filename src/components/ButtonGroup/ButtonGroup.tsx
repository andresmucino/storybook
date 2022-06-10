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
  const CONTAINER_BUTTONS_GROUP =
    "inline-flex space-x-0 overflow-hidden border-2 border-stone-300 rounded-md divide-x divide-black";

  return (
    <div className={CONTAINER_BUTTONS_GROUP}>
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
