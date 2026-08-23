import type { PropsWithChildren } from "react";
import { Button } from "./Button";

interface Props {
  onLike: React.MouseEventHandler<HTMLButtonElement>;
}
export function LikeButton({ children, onLike }: PropsWithChildren<Props>) {
  return <Button handleClick={onLike}>{children}</Button>;
}
