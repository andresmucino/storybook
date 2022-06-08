import React from "react";

interface AtomButtonGroupProps {
  children: React.ReactNode;
}

export const AtomButtonGroup = ({
  children,
}: AtomButtonGroupProps): JSX.Element => {
  return (
    <div className="inline-flex overflow-hidden border rounded-md space-x-0">
      {children}
    </div>
  );
};
