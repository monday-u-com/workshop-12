import React, { useCallback, useRef, useEffect } from "react";

export const useIsMounted = () => {
  let isMountedRef = useRef(false);
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    }
  }, [])
  return useCallback(() => isMountedRef.current, []);
};
