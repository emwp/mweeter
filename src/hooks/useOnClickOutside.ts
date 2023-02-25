import { useEffect, useRef } from 'react';

type Event = MouseEvent | TouchEvent;

type Args = {
  handler: (event?: Event) => void;
  allowCommsClick?: boolean;
};

const useOnClickOutside = <T extends HTMLElement = HTMLElement>({
  handler,
  allowCommsClick,
}: Args) => {
  const elementRef = useRef<T>(null);
  useEffect(() => {
    const listener = (event: Event) => {
      const el = elementRef?.current;
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }
      handler(event);
    };
    document.addEventListener(`mousedown`, listener);
    document.addEventListener(`touchstart`, listener);
    return () => {
      document.removeEventListener(`mousedown`, listener);
      document.removeEventListener(`touchstart`, listener);
    };
  }, [allowCommsClick, handler]);
  return { elementRef };
};

export default useOnClickOutside;