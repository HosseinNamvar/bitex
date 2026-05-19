import { useEffect, useState } from "react";

export const useToggleMenu = (
  initialState: boolean,
  refElement: React.RefObject<HTMLDivElement>,
  forceToggle?: boolean // if true when click on same element it will not toggle
) => {
  const [isActive, setIsActive] = useState<boolean>(initialState);

  useEffect(() => {
    const toggle = (e: MouseEvent) => {
      if (forceToggle) {
        if (
          e.target instanceof HTMLElement &&
          refElement.current &&
          !refElement.current.contains(e.target)
        ) {
          setIsActive(!isActive);
        }
      } else {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      document.addEventListener("click", toggle);
    }

    return () => {
      document.removeEventListener("click", toggle);
    };
  }, [isActive, refElement, forceToggle]);

  return [isActive, setIsActive] as const;
};
