import type { PropsWithChildren } from "react";

interface Props {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({ children, handleClick }: PropsWithChildren<Props>) {
  return (
    <button
      className="button-event"
      onClick={(e) => {
        e.stopPropagation();

        if (handleClick) {
          handleClick(e);
        }
      }}
    >
      {children}
    </button>
  );
}
