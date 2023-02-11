/* eslint-disable @typescript-eslint/no-unnecessary-condition */

import { useEffect, useRef } from 'react';

const appear = () => {
  document.querySelector('header')?.classList.add('header-bg-visible');
};

const fade = () => {
  document.querySelector('header')?.classList.remove('header-bg-visible');
};

const isObserver =
  'IntersectionObserver' in window &&
  'IntersectionObserverEntry' in window &&
  'intersectionRatio' in window.IntersectionObserverEntry.prototype;

export const ObservedPixel = () => {
  const pixel = useRef(null);

  useEffect(() => {
    const { current } = pixel;
    if (!isObserver || !current) return () => {};

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.boundingClientRect.y < 0) {
        appear();
      } else {
        fade();
      }
    });

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
      observer.disconnect();
    };
  }, []);

  return <div ref={pixel} />;
};
