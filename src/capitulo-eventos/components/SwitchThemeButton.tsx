import type { PropsWithChildren } from "react";
import { Button } from "./Button";

interface Props {
  theme: "dark" | "light";
}

export function SwitchThemeButton({
  theme,
  children,
}: PropsWithChildren<Props>) {
  const handleClick = () => {
    const shouldChangeTheme = window.confirm(
      `Deseja realmente ativar o tema ${theme}?`,
    );
    if (!shouldChangeTheme) {
      return;
    }

    document.body.classList.add(`${theme}-theme`);
    const themeToRemove = theme === "dark" ? "light" : "dark";
    document.body.classList.remove(`${themeToRemove}-theme`);
  };

  return (
    <>
      <h3> Selecione o seu tema predileto!</h3>
      <Button handleClick={handleClick}>{children}</Button>
    </>
  );
}
