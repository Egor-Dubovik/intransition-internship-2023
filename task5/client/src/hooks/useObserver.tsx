/* eslint-disable @typescript-eslint/no-explicit-any */
import { RefObject, useEffect, useRef } from 'react';

interface IObserver {
  (
    ref: RefObject<HTMLElement | null>,
    isLoading: boolean,
    callback: () => void,
    dependencies: any[]
  ): void;
}

export const useObserver: IObserver = (ref, isLoading, callback, dependencies) => {
  const observer = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      if (entries[0].isIntersecting) callback();
    };
    observer.current = new IntersectionObserver(handleIntersect);
    if (ref.current) observer.current.observe(ref.current);
  }, dependencies);
};
