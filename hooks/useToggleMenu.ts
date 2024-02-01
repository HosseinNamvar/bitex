import { useEffect, useState } from "react";

export const useToggleMenu = (
  initialState: boolean,
  refElement: React.RefObject<HTMLDivElement>
) => {
  const [isActive, setIsActive] = useState<boolean>(initialState);

  useEffect(() => {
    const toggle = (e: MouseEvent) => {
      if (
        e.target instanceof HTMLElement &&
        refElement.current &&
        !refElement.current.contains(e.target)
      ) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener("click", toggle);
    }

    return () => {
      window.removeEventListener("click", toggle);
    };
  }, [isActive, refElement]);

  return [isActive, setIsActive] as const;
};
