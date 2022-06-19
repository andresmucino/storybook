interface MoleculeListItemButtonProps {
  leftIcon?: React.ReactNode;
  title: string;
  rightIcon?: React.ReactNode;
  onClick: () => void;
  subTitle?: string;
}

export const MoleculeListItemButton = ({
  leftIcon,
  title,
  rightIcon,
  onClick,
  subTitle,
}: MoleculeListItemButtonProps) => {
  const CONTAINER_BUTTON = `h-14 active:opacity-80 active:bg-slate-300 px-0.5 hover:bg-slate-100 border-b-2 w-80 tracking-wider`;

  return (
    <button className={CONTAINER_BUTTON} onClick={onClick}>
      <div className="flex items-center justify-between">
        {leftIcon && <div className="">{leftIcon}</div>}
        <div className="flex flex-col truncate">
          <span className="text-xl pb-0.5">{title}</span>
          {subTitle && <span className="text-sm">{subTitle}</span>}
        </div>
        {rightIcon && <div className="">{rightIcon}</div>}
      </div>
    </button>
  );
};
