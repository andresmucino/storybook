interface AtomBadgeProps {
  title: string;
  color?: string;
}

export const AtomBadge = ({ title, color }: AtomBadgeProps) => {
  const CONTAINER_BADGE = `flex items-center space-x-1.5`;
  const BADGE = `text-lg`;

  return (
    <div className={CONTAINER_BADGE}>
      <svg
        className="w-8 h-8"
        style={{ color }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
      >
        <circle cx="8" cy="8" r="5" />
      </svg>
      <span className={BADGE}>{title}</span>
    </div>
  );
};
