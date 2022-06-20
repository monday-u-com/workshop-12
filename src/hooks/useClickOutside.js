import React, { useEffect } from "react";

export const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const eventHandler = (event) => {
      if (isClickOutside(ref.current, event)) callback();
    };
    window.addEventListener('click', eventHandler);
    return () => window.removeEventListener('click', eventHandler);
  }, [ref, callback]);
};

const isClickOutside = (element, clickEvent) => {
  return element && !element.contains(clickEvent.target);
};
